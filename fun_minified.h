/* File generated with Shader Minifier 1.1.4
 * http://www.ctrl-alt-test.fr
 */

var fun_renamed_fs =
 "vec2 v(vec2 x,vec2 y)" +
 "{" +
   "return x.x<y.x?x:y;" +
 "}" +
 "vec2 v(vec3 y)" +
 "{" +
   "vec2 x=vec2(1.);" +
   "for(float m=.3;m<1.;m+=.2)" +
     "{" +
       "vec3 d=vec3(cos(m*9.+T*.3)*y.x+sin(m*9.+T*.3)*y.z,y.y,-sin(m*9.+T*.3)*y.x+cos(m*9.+T*.3)*y.z)+vec3(2.,sqrt(m)*20.-20.,1.);" +
       "vec2 n=abs(vec2(length(d.xy),d.z-99.+mod(T/m*20.,198.)))-vec2(.7,5.);" +
       "x=v(x,v(v(vec2(min(max(n.x,n.y),0.)+length(max(n,0.)),10.),vec2(length(d.yx)-.5,3.)),vec2(length(vec2(length(d.xy)-.9,mod(d.z,4.)-2.))-.2,.1)));" +
     "}" +
   "return x;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 m=-1.+2.*gl_FragCoord.xy/R.xy;" +
   "m.x*=R.x/R.y;" +
   "vec3 x=vec3(0.,4.4,-16.),T=normalize(vec3(m.xy,2.)),y;" +
   "float d=1.,n;" +
   "vec3 l=vec3(.1);" +
   "for(int f=0;f<99;f++)" +
     "{" +
       "if((n=v(y=x+T*d).x)<.01||d>60.)" +
         "break;" +
       "d+=n;" +
     "}" +
   "if(d<60.)" +
     "{" +
       "vec3 s=vec3(.01,0.,0.),z=normalize(vec3(v(y+s.xyy).x-v(y-s.xyy).x,v(y+s.yxy).x-v(y-s.yxy).x,v(y+s.yyx).x-v(y-s.yyx).x));" +
       "l=.4*(1.+sin(vec3(.5,.4,0)*(v(y).y-1.)))*(1.+(max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))<.1?0.:max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))<.3?.3:max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))<.7?.7:1.)+step(.3,max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))*max(0.,dot(z,normalize(vec3(-.6,.9,-.5))))));" +
     "}" +
   "gl_FragColor=vec4(l,1.);" +
 "}"

