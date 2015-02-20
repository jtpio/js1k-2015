/* File generated with Shader Minifier 1.1.4
 * http://www.ctrl-alt-test.fr
 */

var fun_renamed_fs =
 "uniform float T;" +
 "vec2 v(vec2 x,vec2 y)" +
 "{" +
   "return x.x<y.x?x:y;" +
 "}" +
 "vec2 v(vec3 y)" +
 "{" +
   "vec2 x=vec2(1.);" +
   "for(float n=1.;n<11.1;n+=2.2)" +
     "{" +
       "vec2 c=abs(vec2(length(vec3(cos(n+T)*y.x+sin(n+T)*y.z,y.y+n,cos(n+T)*y.z-sin(n+T)*y.x).xy),cos(n+T)*y.z-sin(n+T)*y.x-40.+mod(T*n*8.,90.)))-vec2(.7,5);" +
       "x=v(x,v(v(vec2(min(max(c.x,c.y),0.)+length(max(c,0.)),38),vec2(length(vec3(cos(n+T)*y.x+sin(n+T)*y.z,y.y+n,cos(n+T)*y.z-sin(n+T)*y.x).yx)-.5,3)),vec2(length(vec2(length(vec3(cos(n+T)*y.x+sin(n+T)*y.z,y.y+n,cos(n+T)*y.z-sin(n+T)*y.x).xy)-.9,mod(cos(n+T)*y.z-sin(n+T)*y.x,4.)-2.))-.2,5)));" +
     "}" +
   "return x;" +
 "}" +
 "void main()" +
 "{" +
   "float n=1.;" +
   "vec2 y=2.*gl_FragCoord.xy/R.xy-n;" +
   "y.x*=R.x/R.y;" +
   "for(int x=0;x<90;x++)" +
     "{" +
       "if(v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n).x<.01||n>60.)" +
         "break;" +
       "n+=v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n).x;" +
     "}" +
   "vec3 x=normalize(vec3(v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n+vec3(.01,0,0).xyy).x-v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n-vec3(.01,0,0).xyy).x,v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n+vec3(.01,0,0).yxy).x-v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n-vec3(.01,0,0).yxy).x,v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n+vec3(.01,0,0).yyx).x-v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n-vec3(.01,0,0).yyx).x));" +
   "gl_FragColor=vec4(n<60.?.5*sin(T+vec3(.1,.1,.5)*v(vec3(0.,-6,-10)+normalize(vec3(y,2))*n).y)*(1.+(max(0.,dot(x,normalize(vec3(0,1,0))))<.1?.1:max(0.,dot(x,normalize(vec3(0,1,0))))<.3?.3:max(0.,dot(x,normalize(vec3(0,1,0))))<.7?.7:1.)+step(.5,max(0.,dot(x,normalize(vec3(0,1,0))))*max(0.,dot(x,normalize(vec3(0,1,0)))))):vec3(0.),1.);" +
 "}"

