// union
vec2 opU( vec2 d1, vec2 d2 ) {
    return (d1.x<d2.x) ? d1 : d2;
}

// rotate around y
vec3 rotate (vec3 pos, float angle) {
    mat3 m = mat3(
        cos(angle), 0.0, -sin(angle),
        0.0, 1.0, 0.0,
        sin(angle), 0.0, cos(angle)
    );
    return m * pos;
}

vec2 train (vec3 pos, float yPos) {
    vec3 t = pos;

    // y offset
    t.y += yPos;
    // moving train
    t.z += -40.0 + mod(iGlobalTime * yPos * 8.0, 90.0);

    return abs(vec2(length(t.xy), t.z)) - vec2(0.7, 5);
}

float track (vec3 pos) {
    return length(pos.yx)-0.5;
}

// distance function
vec2 map(vec3 pos) {
    vec2 res = vec2(1.0);
    for (float i = 1.0; i < 11.1; i+=2.2) {
        vec3 rotated = rotate(pos, i+iGlobalTime);
        vec3 trackPos = rotated;
        trackPos.y += i;
        float trackDist = track(trackPos);

        vec2 d = train(rotated, i);
        res = opU(
                res, // previous
                opU(
                    opU(
                        vec2(min(max(d.x,d.y),0.0) + length(max(d,0.0)), 38),
                        vec2(trackDist, 3)),
                    // the torus along the tube
                    vec2(length(vec2(length(trackPos.xy)-0.9, mod(trackPos.z, 4.0)-2.0))-0.2, 5))
              );
    }
    return res;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float t = 1.0;
    vec2 p = 2.0 * fragCoord.xy/iResolution.xy - 1.0;
    p.x *= iResolution.x/iResolution.y;

    vec3 origin = vec3(0.0, -6, -10);
    vec3 dest = normalize(vec3(p, 2));

    float res;
    for (int i=0; i<90; i++) {
        res = map(origin+dest*t).x;
        if(res < 0.01 || t > 60.0 ) break;
        t += res;
    }


    vec3 color;
    if (t >= 60.0) {
        color = vec3(0.0);
    } else {

        vec3 eps = vec3(0.01, 0, 0);

        vec3 normal = normalize(vec3(
            map(origin+dest*t+eps.xyy).x - map(origin+dest*t-eps.xyy).x,
            map(origin+dest*t+eps.yxy).x - map(origin+dest*t-eps.yxy).x,
            map(origin+dest*t+eps.yyx).x - map(origin+dest*t-eps.yyx).x ));

        vec3 light = normalize(vec3(0, 1, 0));
        float df = max(0.0, dot(normal, light));
        if (df < 0.1) df = 0.0;
        else if (df < 0.3) df = 0.3;
        else if (df < 0.7) df = 0.7;
        else df = 1.0;
        float sf = max(0.0, dot(normal, light));

        color = 0.5 * sin(iGlobalTime + vec3(0.1,0.1,0.5)*map(origin+dest*t).y) * (1.0 + df + step(0.35, sf*sf));
    }

    fragColor = vec4(color, 1.0);

}