/* File generated with Shader Minifier 1.1.4
 * http://www.ctrl-alt-test.fr
 */
#ifndef FUN_COMPRESSED_H_
# define FUN_COMPRESSED_H_

const char *fun_fs =
 "float f(vec3 f,vec3 l,float i)"
 "{"
   "return length(max(abs(f)-l,0.))-i;"
 "}"
 "float f(vec2 f)"
 "{"
   "return length(f)-.04;"
 "}"
 "void main()"
 "{"
   "vec2 i=gl_FragCoord.xy/iResolution.xy-.5;"
   "i.y*=.85;"
   "float l=iResolution.x/iResolution.y;"
   "i.x*=l;"
   "vec3 v=normalize(vec3(i,.5));"
   "float y=0.,e=0.;"
   "vec3 r;"
   "for(int z=0;z<50;++z)"
     "{"
       "vec3 n=v*y;"
       "n.z+=iGlobalTime/4.;"
       "n=fract(n)-.5;"
       "e=f(n,vec3(.05,.05,.05),.04);"
       "r=vec3(1.,1.,0.);"
       "float m=e;"
       "for(float a=0.;a<3.;a++)"
         "{"
           "float o=floor(fract(a/3.)*3.);"
           "if(o==0.)"
             "m=f(n.xy);"
           "else"
             " if(o==1.)"
               "m=f(n.xz);"
             "else"
               " if(o==2.)"
                 "m=f(n.yz);"
           "if(m<e)"
             "e=m,r=vec3(.2,1.,.1)*a/.2;"
         "}"
       "y+=e;"
     "}"
   "float o=1./(y*y*y);"
   "gl_FragColor=vec4(o*r,1.);"
 "}";

#endif // FUN_COMPRESSED_H_
