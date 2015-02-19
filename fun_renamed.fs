uniform float T;

vec2 opU( vec2 d1, vec2 d2 ) {
    return (d1.x<d2.x) ? d1 : d2;
}

vec2 map(vec3 pos) {
    vec2 res = vec2(1.0);
    for (float i = 1.0; i < 9.9; i+=1.9) {
        vec2 d = abs(vec2(length(vec3(cos(i + T * 0.3)*pos.x + sin(i + T * 0.3)*pos.z, pos.y + i, cos(i + T * 0.3)*pos.z-sin(i + T * 0.3)*pos.x).xy), cos(i + T * 0.3)*pos.z-sin(i + T * 0.3)*pos.x - 49.0 + mod(T * i * 8.0, 98.0))) - vec2(0.7, 5);

        res = opU(res, opU(
                opU(vec2(min(max(d.x,d.y),0.0) + length(max(d,0.0)), 2.0), vec2(length(vec3(cos(i + T * 0.3)*pos.x + sin(i + T * 0.3)*pos.z, pos.y + i, cos(i + T * 0.3)*pos.z-sin(i + T * 0.3)*pos.x).yx)-0.5, 10)),
                // the torus along the tube
                vec2(length(vec2(length(vec3(cos(i + T * 0.3)*pos.x + sin(i + T * 0.3)*pos.z, pos.y + i, cos(i + T * 0.3)*pos.z-sin(i + T * 0.3)*pos.x).xy)-0.9,mod(cos(i + T * 0.3)*pos.z-sin(i + T * 0.3)*pos.x,4.0)-2.0))-0.2, 5))
              );
    }
    return res;
}


void main()
{
    float t = 1.0;
    vec2 p = 2.0 * gl_FragCoord.xy/R.xy - t;
    p.x *= R.x/R.y;

    for (int i=0; i<89; i++) {
        if(map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t).x < 0.01 || t > 60.0 ) break;
        t += map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t).x;
    }

    vec3 nor = normalize(vec3(
        map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t+vec3(0.01, 0, 0).xyy).x - map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t-vec3(0.01, 0, 0).xyy).x,
        map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t+vec3(0.01, 0, 0).yxy).x - map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t-vec3(0.01, 0, 0).yxy).x,
        map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t+vec3(0.01, 0, 0).yyx).x - map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t-vec3(0.01, 0, 0).yyx).x ));

    gl_FragColor = vec4(t < 60.0 ? 0.5 * sin(vec3(0.1,0.1,0.5)*(map(vec3(0.0, -6, -20)+normalize(vec3(p, 2))*t).y)) * (1.0 + (max(0.0, dot(nor, normalize(vec3(0, 1, 0)))) < 0.1 ? 0.1 : max(0.0, dot(nor, normalize(vec3(0, 1, 0)))) < 0.3 ? 0.3 : max(0.0, dot(nor, normalize(vec3(0, 1, 0)))) < 0.7 ? 0.7 : 1.0) + step(0.5, max(0.0, dot(nor, normalize(vec3(0, 1, 0))))*max(0.0, dot(nor, normalize(vec3(0, 1, 0)))))) : vec3(0.), 1.0);
}