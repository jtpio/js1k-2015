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
       "vec3 n=vec3(cos(f*28.+T/3.)*y.x+sin(f*28.+T/3.)*y.z,y.y,-sin(f*28.+T/3.)*y.x+cos(f*28.+T/3.)*y.z)+vec3(2.,sqrt(f)*30.-30.,1.);" +
       "vec2 m=abs(vec2(v(n.xy),n.z-99.+mod(T/f*20.,198.)))-vec2(.7,5.);" +
       "float z=min(max(m.x,m.y),0.)+v(max(m,0.));" +
       "x=v(x,v(v(vec2(z,50.),vec2(v(n.yx)-.5,3.)),vec2(v(vec2(v(n.xy)-.9,mod(n.z,5.)-2.5))-.2,.1)));" +
     "}" +
   "return x;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 v=-1.+2.*gl_FragCoord.xy/R.xy;" +
   "v.x*=R.x/R.y;" +
   "vec3 x=vec3(0.,8.,-12.),y=normalize(vec3(v.xy,1.5));" +
   "float f=1.;" +
   "for(int m=0;m<99;m++)" +
     "{" +
       "float z=n(x+y*f).x;" +
       "if(z<.01||f>60.)" +
         "break;" +
       "f+=z;" +
     "}" +
   "vec3 m=vec3(0.),z=x+f*y;" +
   "if(f<60.)" +
     "{" +
       "vec3 s=vec3(.01,0.,0.),c=normalize(vec3(n(z+s.xyy).x-n(z-s.xyy).x,n(z+s.yxy).x-n(z-s.yxy).x,n(z+s.yyx).x-n(z-s.yyx).x)),r=normalize(vec3(-.6,.9,-.5));" +
       "float T=max(0.,dot(c,r)),d=T;" +
       "T=T<.1?0.:T<.3?.3:T<.7?.7:1.;" +
       "m=.4*(1.+sin(vec3(.5,.4,0)*(n(z).y-1.)))*(1.+T+step(.3,d*d));" +
     "}" +
   "gl_FragColor=vec4(m,1.);" +
 "}"

