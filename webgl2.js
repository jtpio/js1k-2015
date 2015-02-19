for(k in g)
  g[k.match(/^..|[A-V]/g).join("")]=g[k];

with(g){
    for(x=crP(t=r=2);t;coS(s),atS(x,s))
        shS(s=crS(35634-t),

          --t?"precision lowp float;"+
          "uniform float T;"+
          "vec2 R=vec2("+(a.width/=3)+","+(a.height/=3)+");"+
 "vec2 v(vec2 y,vec2 x)" +
 "{" +
   "return y.x<x.x?y:x;" +
 "}" +
 "vec2 v(vec3 y)" +
 "{" +
   "vec2 x=vec2(1.);" +
   "for(float i=1.;i<9.;i+=2.4)" +
     "{" +
       "vec3 m=vec3(cos(i+T*.3)*y.x+sin(i+T*.3)*y.z,y.y+i,-sin(i+T*.3)*y.x+cos(i+T*.3)*y.z);" +
       "vec2 d=abs(vec2(length(m.xy),m.z-49.+mod(i*T*8.,98.)))-vec2(.7,5);" +
       "x=v(x,v(v(vec2(min(max(d.x,d.y),0.)+length(max(d,0.)),9.),vec2(length(m.yx)-.5,3)),vec2(length(vec2(length(m.xy)-.9,mod(m.z,4.)-2.))-.2,.1)));" +
     "}" +
   "return x;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 m=-1.+2.*gl_FragCoord.xy/R;" +
   "m.x*=R.x/R.y;" +
   "float x=1.;" +
   "for(int T=0;T<89;T++)" +
     "{" +
       "if(v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x).x<.01||x>60.)" +
         "break;" +
       "x+=v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x).x;" +
     "}" +
   "vec3 y=normalize(vec3(v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x+vec3(.01,0,0).xyy).x-v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x-vec3(.01,0,0).xyy).x,v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x+vec3(.01,0,0).yxy).x-v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x-vec3(.01,0,0).yxy).x,v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x+vec3(.01,0,0).yyx).x-v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x-vec3(.01,0,0).yyx).x));" +
   "gl_FragColor=vec4(x<60.?.4*(1.+sin(vec3(.5,.5,0)*(v(vec3(0.,-6,-20)+normalize(vec3(m.xy,2))*x).y-1.)))*(1.+(max(0.,dot(y,normalize(vec3(-.6,.9,-.5))))<.1?0.:max(0.,dot(y,normalize(vec3(-.6,.9,-.5))))<.3?.3:max(0.,dot(y,normalize(vec3(-.6,.9,-.5))))<.7?.7:1.)+step(.5,max(0.,dot(y,normalize(vec3(-.6,.9,-.5))))*max(0.,dot(y,normalize(vec3(-.6,.9,-.5)))))):vec3(.9),1.);" +
 "}"
 :"attribute vec4 a;void main(){gl_Position=a;}");

    veAP(enVAA(biB(34962,crB())), 2, 5126, liP(x), usP(x),
        buD(34962,new Float32Array([1,1,1,-3,-3,1]),35044)
        );

    setInterval(
        'g.drA(4,g.uniform1f(g.geUL(x,"T"),r+=.03),3)',
        33)
};
