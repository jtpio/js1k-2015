for(x in g)
  g[x.match(/^..|[A-V]/g).join("")]=g[x];

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
 "vec2 v(vec3 y)" +
 "{" +
   "vec2 x=vec2(1.);" +
   "for(float n=1.;n<9.9;n+=1.9)" +
     "{" +
       "vec2 c=abs(vec2(length(vec3(cos(n+T*.3)*y.x+sin(n+T*.3)*y.z,y.y+n,cos(n+T*.3)*y.z-sin(n+T*.3)*y.x).xy),cos(n+T*.3)*y.z-sin(n+T*.3)*y.x-49.+mod(T*n*8.,98.)))-vec2(.7,5);" +
       "x=v(x,v(v(vec2(min(max(c.x,c.y),0.)+length(max(c,0.)),2.),vec2(length(vec3(cos(n+T*.3)*y.x+sin(n+T*.3)*y.z,y.y+n,cos(n+T*.3)*y.z-sin(n+T*.3)*y.x).yx)-.5,10)),vec2(length(vec2(length(vec3(cos(n+T*.3)*y.x+sin(n+T*.3)*y.z,y.y+n,cos(n+T*.3)*y.z-sin(n+T*.3)*y.x).xy)-.9,mod(cos(n+T*.3)*y.z-sin(n+T*.3)*y.x,4.)-2.))-.2,5)));" +
     "}" +
   "return x;" +
 "}" +
 "void main()" +
 "{" +
   "float n=1.;" +
   "vec2 y=2.*gl_FragCoord.xy/R-n;" +
   "y.x*=R.x/R.y;" +
   "for(int x=0;x<89;x++)" +
     "{" +
       "if(v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n).x<.01||n>60.)" +
         "break;" +
       "n+=v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n).x;" +
     "}" +
   "vec3 x=normalize(vec3(v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n+vec3(.01,0,0).xyy).x-v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n-vec3(.01,0,0).xyy).x,v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n+vec3(.01,0,0).yxy).x-v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n-vec3(.01,0,0).yxy).x,v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n+vec3(.01,0,0).yyx).x-v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n-vec3(.01,0,0).yyx).x));" +
   "gl_FragColor=vec4(n<60.?.5*sin(vec3(.1,.1,.5)*v(vec3(0.,-6,-20)+normalize(vec3(y,2))*n).y)*(1.+(max(0.,dot(x,normalize(vec3(0,1,0))))<.1?.1:max(0.,dot(x,normalize(vec3(0,1,0))))<.3?.3:max(0.,dot(x,normalize(vec3(0,1,0))))<.7?.7:1.)+step(.5,max(0.,dot(x,normalize(vec3(0,1,0))))*max(0.,dot(x,normalize(vec3(0,1,0)))))):vec3(0.),1.);" +
 "}"
 :"attribute vec4 a;void main(){gl_Position=a;}");

    veAP(enVAA(biB(34962,crB())), 2, 5126, liP(x), usP(x),
        buD(34962,new Float32Array([1,1,1,-3,-3,1]),35044)
        );

    setInterval(
        'g.drA(4,g.uniform1f(g.geUL(x,"T"),r+=.03),3)',
        33)
};
