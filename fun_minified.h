/* File generated with Shader Minifier 1.1.4
 * http://www.ctrl-alt-test.fr
 */

var fun_renamed_fs =
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
   "vec3 x=vec3(0.,8.,-16.),m=normalize(vec3(v.xy,2.)),y;" +
   "float d=1.,c;" +
   "vec3 f=vec3(.9);" +
   "for(int r=0;r<99;r++)" +
     "{" +
       "if((c=n(y=x+m*d).x)<.01||d>60.)" +
         "break;" +
       "d+=c;" +
     "}" +
   "if(d<60.)" +
     "{" +
       "vec3 s=vec3(.01,0.,0.),r=normalize(vec3(n(y+s.xyy).x-n(y-s.xyy).x,n(y+s.yxy).x-n(y-s.yxy).x,n(y+s.yyx).x-n(y-s.yyx).x));" +
       "f=.4*(1.+sin(vec3(.5,.4,0)*(n(y).y-1.)))*(1.+(max(0.,dot(r,normalize(vec3(-.6,.9,-.5))))<.1?0.:max(0.,dot(r,normalize(vec3(-.6,.9,-.5))))<.3?.3:max(0.,dot(r,normalize(vec3(-.6,.9,-.5))))<.7?.7:1.)+step(.3,max(0.,dot(r,normalize(vec3(-.6,.9,-.5))))*max(0.,dot(r,normalize(vec3(-.6,.9,-.5))))));" +
     "}" +
   "gl_FragColor=vec4(f,1.);" +
 "}"

