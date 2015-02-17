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
   "for(float f=.3;f<1.;f+=.2)" +
     "{" +
       "float n=sin(f*28.+T/3.),m=cos(f*28.+T/3.);" +
       "vec3 d=vec3(m*y.x+n*y.z,y.y,-n*y.x+m*y.z)+vec3(2.,sqrt(f)*30.-30.,1.);" +
       "vec2 R=abs(vec2(length(d.xy),d.z-99.+mod(T*20.,198.)))-vec2(.7,5.);" +
       "float l=min(max(R.x,R.y),0.)+length(max(R,0.));" +
       "x=v(x,v(v(vec2(l,50.),vec2(length(d.yx)-.5,3.)),vec2(v(vec2(v(d.xy)-.9,mod(d.z,5.)-2.5))-.2,.1)));" +
     "}" +
   "return x;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 v=-1.+2.*gl_FragCoord.xy/R.xy;" +
   "v.x*=R.x/R.y;" +
   "vec3 x=vec3(0.,8.,-12.),y=normalize(vec3(v.xy,1.5));" +
   "float f=1.;" +
   "for(int l=0;l<99;l++)" +
     "{" +
       "float m=n(x+y*f).x;" +
       "if(m<.01||f>60.)" +
         "break;" +
       "f+=m;" +
     "}" +
   "vec3 l=vec3(0.),m=x+f*y;" +
   "if(f<60.)" +
     "{" +
       "vec3 d=vec3(.01,0.,0.),R=normalize(vec3(n(m+d.xyy).x-n(m-d.xyy).x,n(m+d.yxy).x-n(m-d.yxy).x,n(m+d.yyx).x-n(m-d.yyx).x)),r=normalize(vec3(-.6,.9,-.5));" +
       "float s=max(0.,dot(R,r));" +
       "s=s<.1?0.:s<.3?.3:s<.7?.7:1.;" +
       "float z=max(0.,dot(R,r));" +
       "l=.4*(1.+sin(vec3(.5,.4,0)*(n(m).y-1.)))*(1.+s+step(.3,z*z));" +
     "}" +
   "gl_FragColor=vec4(l,1.);" +
 "}"

