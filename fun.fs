float box(vec3 p, vec3 b, float size){
  return length(max(abs(p)-b,0.0)) - size;
}

float cylinder(vec2 pos) {
    return length(pos) - 0.04;
}

void main(void)
{
    vec2 uv = gl_FragCoord.xy / iResolution.xy - 0.5;
    uv.y *= 0.85;

    float ratio = iResolution.x / iResolution.y;
    uv.x *= ratio;

    vec3 ray = normalize(vec3(uv,0.5));

    float t = 0.0;
    float d = 0.0;
    vec3 col;

    for(int i = 0; i < 50; ++i){
        vec3 pos = ray*t;
        pos.z += iGlobalTime/4.0;
        pos = fract(pos) - 0.5;

        d = box(pos, vec3(0.05, 0.05, 0.05), 0.04);
        col = vec3(1.0, 1.0, 0.0);
        float k = d;
        for (float j = 0.0; j < 3.0; j++) {
            float id = floor(fract(j/3.0)*3.0);
            if (id == 0.0) {
                k = cylinder(pos.xy);
            } else if (id == 1.0) {
                k = cylinder(pos.xz);
            } else if (id == 2.0) {
                k = cylinder(pos.yz);
            }
            if(k<d){
                d=k;
                col=vec3(0.2,1.0,0.1) * j / 0.2;
            }
        }

        t+=d;
    }

    float tint = 1.0 / (t*t*t);
    gl_FragColor = vec4(tint*col, 1.0);
}