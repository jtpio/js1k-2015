vec2 opU( vec2 d1, vec2 d2 ) {
    return (d1.x<d2.x) ? d1 : d2;
}

float length8( vec2 p )
{
    p = p*p; p = p*p; p = p*p;
    return pow( p.x + p.y, 1.0/8.0 );
}

vec2 rail(vec3 pos) {

    // the train and the main tube
    // capped cylinder
    vec2 d = abs(vec2(length(pos.xy),pos.z - 99.0 + mod(iGlobalTime * 20.0, 198.0))) - vec2(0.7, 5.0);
    float cyl = min(max(d.x,d.y),0.0) + length(max(d,0.0));

    return opU(

            opU(vec2(cyl, 50.0), vec2(length(pos.yx)-0.5, 3.0)),
            // the torus along the tube
            vec2(length8(vec2(length8(pos.xy)-0.9,mod(pos.z,5.0)-2.5))-0.2, 0.1));
}

vec2 map(vec3 pos) {
    vec2 res = vec2(1.0);
    for (float i = 0.3; i < 0.6; i+=0.1) {
        float s = sin(i * 18.0), c = cos(i * 18.0);
        res = opU(res, rail(vec3(c*pos.x + s*pos.z, pos.y, -s*pos.x + c*pos.z) + vec3(2.0, sqrt(i) * 30.0 - 15.0, 1.0)));
    }
    return res;
}

void main()
{
    vec2 p = (-1.0+2.0 * gl_FragCoord.xy/iResolution.xy);
    p.x *= iResolution.x/iResolution.y;

    vec3 ro = vec3(0.0, -5.0, -9.0);
    vec3 rd = normalize(vec3(p.xy,1.5));

    float t = 1.0;
    for (int i=0; i<99; i++) {
        float res = map(ro+rd*t).x;
        if(res < 0.01 || t > 60.0 ) break;
        t += res;
    }

    vec3 col = vec3(0), pos = ro+t*rd;
    if (t < 60.0) {

        vec3 eps = vec3(0.001, col.yz);
        vec3 nor = normalize(vec3(
            map(pos+eps.xyy).x - map(pos-eps.xyy).x,
            map(pos+eps.yxy).x - map(pos-eps.yxy).x,
            map(pos+eps.yyx).x - map(pos-eps.yyx).x ));

        vec3 lig = normalize( vec3(-0.6, 0.9, -0.5) );
        float df = max(0.0, dot(nor, lig));
        if (df < 0.1) df = 0.0;
        else if (df < 0.3) df = 0.3;
        else if (df < 0.7) df = 0.7;
        else df = 1.0;
        float sf = max(0.0, dot(nor, lig));

        col = 0.4 * (1.0+sin(vec3(0.5,0.42,0)*(map(pos).y-1.0))) * (1.0 + df + step(0.35, sf*sf));
    }

    gl_FragColor = vec4(mix(col, vec3(0.0), smoothstep(0.5,49.0, length(pos))), 1.0);
}