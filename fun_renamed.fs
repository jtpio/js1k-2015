vec2 opU( vec2 d1, vec2 d2 ) {
    return (d1.x<d2.x) ? d1 : d2;
}

vec2 map(vec3 pos) {
    vec2 res = vec2(1.0);
    for (float i = 0.3; i < 1.0; i+=0.2) {

        vec3 p = vec3(cos(i * 9.0 + T * 0.3)*pos.x + sin(i * 9.0 + T * 0.3)*pos.z, pos.y, -sin(i * 9.0 + T * 0.3)*pos.x + cos(i * 9.0 + T * 0.3)*pos.z) + vec3(2.0, sqrt(i) * 20.0 - 20.0, 1.0);

        // the train and the main tube
        // capped cylinder
        vec2 d = abs(vec2(length(p.xy), p.z - 99.0 + mod(T / i * 20.0, 198.0))) - vec2(0.7, 5.0);

        res = opU(res, opU(
                opU(vec2(min(max(d.x,d.y),0.0) + length(max(d,0.0)), 10.0), vec2(length(p.yx)-0.5, 3.0)),
                // the torus along the tube
                vec2(length(vec2(length(p.xy)-0.9,mod(p.z,4.0)-2.0))-0.2, 0.1))
              );
    }
    return res;
}


void main()
{
    vec2 p = (-1.0+2.0 * gl_FragCoord.xy/R.xy);
    p.x *= R.x/R.y;

    vec3 ro = vec3(0.0, 4.4, -16.0);
    vec3 rd = normalize(vec3(p.xy, 2.0)), pos;

    float t = 1.0, res;
    vec3 col = vec3(0.1);

    for (int i=0; i<99; i++) {
        if((res=map(pos=ro+rd*t).x) < 0.01 || t > 60.0 ) break;
        t += res;
    }

    if (t < 60.0) {
        vec3 eps = vec3(0.01, 0.0, 0.0);
        vec3 nor = normalize(vec3(
            map(pos+eps.xyy).x - map(pos-eps.xyy).x,
            map(pos+eps.yxy).x - map(pos-eps.yxy).x,
            map(pos+eps.yyx).x - map(pos-eps.yyx).x ));

        col = 0.4 * (1.0+sin(vec3(0.5,0.4,0)*(map(pos).y-1.0))) * (1.0 + (max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5)))) < 0.1 ? 0.0 : max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5)))) < 0.3 ? 0.3 : max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5)))) < 0.7 ? 0.7 : 1.0) + step(0.3, max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5))))*max(0.0, dot(nor, normalize(vec3(-0.6, 0.9, -0.5))))));
    }

    gl_FragColor = vec4(col/*mix(col, vec3(0.9), smoothstep(8.5,29.0, length(pos)))*/, 1.0);
}