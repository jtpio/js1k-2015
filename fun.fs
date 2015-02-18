vec2 opU( vec2 d1, vec2 d2 ) {
    return (d1.x<d2.x) ? d1 : d2;
}

float hit = 0.0;

float map(vec3 pos) {
    vec2 res = vec2(1.0);
    for (float i = 1.0; i < 9.9; i+=2.2) {

        vec3 p = vec3(cos(i + iGlobalTime * 0.3)*pos.x + sin(i + iGlobalTime * 0.3)*pos.z, pos.y, -sin(i + iGlobalTime * 0.3)*pos.x + cos(i + iGlobalTime * 0.3)*pos.z) + vec3(2.0, i, 1.0);

        vec2 d = abs(vec2(length(p.xy), p.z - 49.0 + mod(iGlobalTime / i * 40.0, 98.0))) - vec2(0.7, 5);

        res = opU(res, opU(
                opU(vec2(min(max(d.x,d.y),0.0) + length(max(d,0.0)), 9.0), vec2(length(p.yx)-0.5, 3)),
                // the torus along the tube
                vec2(length(vec2(length(p.xy)-0.9,mod(p.z,4.0)-2.0))-0.2, 0.1))
              );
    }
    hit = res.y;
    return res.x;
}


void main()
{
    vec2 p = (-1.0+2.0 * gl_FragCoord.xy/iResolution.xy);
    p.x *= iResolution.x/iResolution.y;

    vec3 ro = vec3(0.0, -6, -20);
    vec3 rd = normalize(vec3(p.xy, 2)), pos;

    float t = 1.0, res;

    for (int i=0; i<99; i++) {
        if((res=map(pos=ro+rd*t)) < 0.01 || t > 60.0 ) break;
        t += res;
    }

    vec3 eps = vec3(0.01, 0, 0);
    vec3 nor = normalize(vec3(
        map(pos+eps.xyy) - map(pos-eps.xyy),
        map(pos+eps.yxy) - map(pos-eps.yxy),
        map(pos+eps.yyx) - map(pos-eps.yyx) ));

    gl_FragColor = vec4(t < 60.0 ? 0.4 * (1.0+sin(vec3(0.5,0.5,0)*(hit-1.0))) * (1.0 + (max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5)))) < 0.1 ? 0.0 : max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5)))) < 0.3 ? 0.3 : max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5)))) < 0.7 ? 0.7 : 1.0) + step(0.3, max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5))))*max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5)))))) : vec3(0.9), 1.0);
}