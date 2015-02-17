for(k in g)
  g[k.match(/^..|[A-V]/g).join("")]=g[k];

with(g){
    for(x=crP(t=r=2);t;coS(s),atS(x,s))
        shS(s=crS(35634-t),

          --t?"precision lowp float;"+
          "uniform float T;"+
          "vec2 R=vec2("+(a.width/=2)+","+(a.height/=2)+");"+
"vec2 v(vec2 x,vec2 y)" +
 "{" +
   "return x.x<y.x?x:y;" +
 "}" +
 "vec2 v(vec3 y)" +
 "{" +
   "vec2 x=vec2(1.);" +
   "for(float m=1.;m<9.9;m+=2.2)" +
     "{" +
       "vec3 d=vec3(cos(m+T*.3)*y.x+sin(m+T*.3)*y.z,y.y,-sin(m+T*.3)*y.x+cos(m+T*.3)*y.z)+vec3(2.,m,1.);" +
       "vec2 n=abs(vec2(length(d.xy),d.z-99.+mod(T/m*80.,198.)))-vec2(.7,5.);" +
       "x=v(x,v(v(vec2(min(max(n.x,n.y),0.)+length(max(n,0.)),10.),vec2(length(d.yx)-.5,3.)),vec2(length(vec2(length(d.xy)-.9,mod(d.z,4.)-2.))-.2,.1)));" +
     "}" +
   "return x;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 m=-1.+2.*gl_FragCoord.xy/R.xy;" +
   "m.x*=R.x/R.y;" +
   "vec3 x=vec3(0.,-6,-20.),T=normalize(vec3(m.xy,3.)),y;" +
   "float d=1.,n;" +
   "for(int f=0;f<99;f++)" +
     "{" +
       "if((n=v(y=x+T*d).x)<.01||d>60.)" +
         "break;" +
       "d+=n;" +
     "}" +
   "vec3 s=vec3(.01,0.,0.),l=normalize(vec3(v(y+s.xyy).x-v(y-s.xyy).x,v(y+s.yxy).x-v(y-s.yxy).x,v(y+s.yyx).x-v(y-s.yyx).x));" +
   "gl_FragColor=vec4(d<60.?.4*(1.+sin(vec3(.5,.4,0)*(v(y).y-1.)))*(1.+(max(0.,dot(l,normalize(vec3(-.6,.9,-.5))))<.1?0.:max(0.,dot(l,normalize(vec3(-.6,.9,-.5))))<.3?.3:max(0.,dot(l,normalize(vec3(-.6,.9,-.5))))<.7?.7:1.)+step(.3,max(0.,dot(l,normalize(vec3(-.6,.9,-.5))))*max(0.,dot(l,normalize(vec3(-.6,.9,-.5)))))):vec3(.1),1.);" +
 "}"
 :"attribute vec4 a;void main(){gl_Position=a;}");

    veAP(enVAA(biB(34962,crB())), 2, 5126, liP(x), usP(x),
        buD(34962,new Float32Array([1,1,1,-3,-3,1]),35044)
        );

    setInterval(
        'g.drA(4,g.uniform1f(g.geUL(x,"T"),r+=.1),3)',
        33)
};
