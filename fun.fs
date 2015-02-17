vec2 opU( vec2 d1, vec2 d2 ) {
    return (d1.x<d2.x) ? d1 : d2;
}

float len(vec2 p)
{
    p = p*p*p*p;
    return pow(p.x + p.y, 0.25);
}

vec2 map(vec3 pos) {
    vec2 res = vec2(1.0);
    for (float i = 0.3; i < 1.0; i+=0.2) {
        vec3 p = vec3(cos(i * 28.0 + iGlobalTime / 3.0)*pos.x + sin(i * 28.0 + iGlobalTime / 3.0)*pos.z, pos.y, -sin(i * 28.0 + iGlobalTime / 3.0)*pos.x + cos(i * 28.0 + iGlobalTime / 3.0)*pos.z) + vec3(2.0, sqrt(i) * 30.0 - 30.0, 1.0);

        // the train and the main tube
        // capped cylinder
        vec2 d = abs(vec2(len(p.xy), p.z - 99.0 + mod(iGlobalTime / i * 20.0, 198.0))) - vec2(0.7, 5.0);
        float cyl = min(max(d.x,d.y),0.0) + len(max(d,0.0));

        res = opU(res, opU(
                opU(vec2(cyl, 50.0), vec2(len(p.yx)-0.5, 3.0)),
                // the torus along the tube
                vec2(len(vec2(len(p.xy)-0.9,mod(p.z,5.0)-2.5))-0.2, 0.1))
              );
    }
    return res;
}

void main()
{
    vec2 p = (-1.0+2.0 * gl_FragCoord.xy/iResolution.xy);
    p.x *= iResolution.x/iResolution.y;

    vec3 ro = vec3(0.0, 8.0, -12.0);
    vec3 rd = normalize(vec3(p.xy,1.5));

    float t = 1.0;
    for (int i=0; i<99; i++) {
        float res = map(ro+rd*t).x;
        if(res < 0.01 || t > 60.0 ) break;
        t += res;
    }

    vec3 col = vec3(0.0), pos = ro+t*rd;
    if (t < 60.0) {

        vec3 eps = vec3(0.01, 0.0, 0.0);
        vec3 nor = normalize(vec3(
            map(pos+eps.xyy).x - map(pos-eps.xyy).x,
            map(pos+eps.yxy).x - map(pos-eps.yxy).x,
            map(pos+eps.yyx).x - map(pos-eps.yyx).x ));

        vec3 lig = normalize(vec3(-0.6, 0.9, -0.5));
        float df = max(0.0, dot(nor, lig));
        float sf = df;
        df = df < 0.1 ? 0.0 : (df < 0.3) ? 0.3 : (df < 0.7) ? 0.7 : 1.0;

        col = 0.4 * (1.0+sin(vec3(0.5,0.4,0)*(map(pos).y-1.0))) * (1.0 + df + step(0.3, sf*sf));
    }

    gl_FragColor = vec4(col/*mix(col, vec3(0.9), smoothstep(8.5,29.0, length(pos)))*/, 1.0);
}