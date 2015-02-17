for(k in g)
  g[k.match(/^..|[A-V]/g).join("")]=g[k];

with(g){
    for(x=crP(t=r=2);t;coS(s),atS(x,s))
        shS(s=crS(35634-t),

          --t?"precision lowp float;"+
          "uniform float T;"+
          "vec2 R=vec2("+(a.width/=3)+","+(a.height/=3)+");"+
 "vec2 v(vec2 x,vec2 y)" +
 "{" +
   "return x.x<y.x?x:y;" +
 "}" +
 "float v(vec2 v)" +
 "{" +
   "return v=v*v*v*v,pow(v.x+v.y,.25);" +
 "}" +
 "vec2 n(vec3 y)" +
 "{" +
   "vec2 x=vec2(1.);" +
   "for(float m=.3;m<1.;m+=.1)" +
     "{" +
       "vec3 n=vec3(cos(m*99.+T/3.)*y.x+sin(m*99.+T/3.)*y.z,y.y,-sin(m*99.+T/3.)*y.x+cos(m*99.+T/3.)*y.z)+vec3(2.,sqrt(m)*40.-40.,1.);" +
       "vec2 d=abs(vec2(v(n.xy),n.z-99.+mod(T/m*20.,198.)))-vec2(.7,5.);" +
       "x=v(x,v(v(vec2(min(max(d.x,d.y),0.)+v(max(d,0.)),10.),vec2(v(n.yx)-.5,3.)),vec2(v(vec2(v(n.xy)-.9,mod(n.z,5.)-2.5))-.2,.1)));" +
     "}" +
   "return x;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 v=-1.+2.*gl_FragCoord.xy/R.xy;" +
   "v.x*=R.x/R.y;" +
   "vec3 m=vec3(0.,8.,-16.),d=normalize(vec3(v.xy,2.));" +
   "float x=1.;" +
   "vec3 y=vec3(.9);" +
   "for(int f=0;f<99;f++)" +
     "{" +
       "if(n(m+d*x).x<.01||x>60.)" +
         "break;" +
       "x+=n(m+d*x).x;" +
     "}" +
   "if(x<60.)" +
     "{" +
       "vec3 s=vec3(.01,0.,0.),z=normalize(vec3(n(m+d*x+s.xyy).x-n(m+d*x-s.xyy).x,n(m+d*x+s.yxy).x-n(m+d*x-s.yxy).x,n(m+d*x+s.yyx).x-n(m+d*x-s.yyx).x));" +
       "y=.4*(1.+sin(vec3(.5,.4,0)*(n(m+d*x).y-1.)))*(1.+(max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))<.1?0.:max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))<.3?.3:max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))<.7?.7:1.)+step(.3,max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))*max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))));" +
     "}" +
   "gl_FragColor=vec4(y,1.);" +
 "}"

          :"attribute vec4 a;void main(){gl_Position=a;}");

    veAP(enVAA(biB(34962,crB())), 2, 5126, liP(x), usP(x),
        buD(34962,new Float32Array([1,1,1,-3,-3,1]),35044)
        );

    setInterval(
        'g.drA(4,g.uniform1f(g.geUL(x,"T"),r+=.1),3)',
        33)
};
