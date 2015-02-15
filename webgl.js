vs="attribute vec4 p;void main(){gl_Position=p;}";

fs=""+
"precision highp float;"+
"uniform float iGlobalTime;"+
"vec2 iResolution=vec2("+a.width+","+a.height+");"+
"vec2 v(vec2 v,vec2 y)" +
 "{" +
   "return v.x<y.x?v:y;" +
 "}" +
 "float v(vec2 v)" +
 "{" +
   "return v=v*v,v=v*v,v=v*v,pow(v.x+v.y,.125);" +
 "}" +
 "vec2 n(vec3 m)" +
 "{" +
   "vec2 n=abs(vec2(length(m.xy),m.z-99.+mod(iGlobalTime*20.,198.)))-vec2(.7,5.);" +
   "float i=min(max(n.x,n.y),0.)+length(max(n,0.));" +
   "return v(v(vec2(i,50.),vec2(length(m.yx)-.5,3.)),vec2(v(vec2(v(m.xy)-.9,mod(m.z,5.)-2.5))-.2,.05));" +
 "}" +
 "vec3 n(vec3 v,float m)" +
 "{" +
   "float i=sin(m),n=cos(m);" +
   "return vec3(n*v.x+i*v.z,v.y,-i*v.x+n*v.z);" +
 "}" +
 "vec2 m(in vec3 m)" +
 "{" +
   "vec2 i=vec2(999.,0.);" +
   "for(float f=0.;f<.3;f+=.1)" +
     "i=v(i,n(n(m,f*9.)+vec3(2.,f*20.,1.)));" +
   "return i;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 v=-1.+2.*gl_FragCoord.xy/iResolution.xy;" +
   "v.x*=iResolution.x/iResolution.y;" +
   "float i=iGlobalTime/6.;" +
   "vec3 n=vec3(10.*sin(i),5.*sin(i),20.*cos(i)),f=normalize(vec3(v.xy,1.5));" +
   "float x=1.;" +
   "for(int r=0;r<99;r++)" +
     "{" +
       "float y=m(n+f*x).x;" +
       "if(y<.01||x>60.)" +
         "break;" +
       "x+=y;" +
     "}" +
   "vec3 y=vec3(0.),l=n+x*f;" +
   "if(x<60.)" +
     "{" +
       "vec3 r=vec3(.001,y.yz),z=normalize(vec3(m(l+r.xyy).x-m(l-r.xyy).x,m(l+r.yxy).x-m(l-r.yxy).x,m(l+r.yyx).x-m(l-r.yyx).x)),d=normalize(vec3(-.6,.9,-.5));" +
       "float s=max(0.,dot(z,d));" +
       "if(s<.1)" +
         "s=0.;" +
       "else" +
         " if(s<.3)" +
           "s=.3;" +
         "else" +
           " if(s<.7)" +
             "s=.7;" +
           "else" +
             " s=1.;" +
       "float e=max(0.,dot(z,d));" +
       "y=.4*(1.+sin(vec3(.5,.42,0)*(m(l).y-1.)))*(1.+s+step(.35,e*e));" +
     "}" +
   "gl_FragColor=vec4(mix(y,vec3(0.),smoothstep(0.,1.,(length(l)-.5)/48.5)),1.);" +
 "}";

p=g.createProgram();
shader=g.createShader(g.VERTEX_SHADER);
g.shaderSource(shader, vs);
g.compileShader(shader);
g.attachShader(p,shader);
shader=g.createShader(g.FRAGMENT_SHADER);
g.shaderSource(shader, fs);
g.compileShader(shader);
g.attachShader(p,shader);
g.linkProgram(p);
g.useProgram(p);

pLocation=g.getAttribLocation(p,"p");
g.bindBuffer(g.ARRAY_BUFFER,g.createBuffer());
g.bufferData(g.ARRAY_BUFFER,new Float32Array(
  [-1,-1,
    1,-1,
   -1, 1,
   -1, 1,
    1,-1,
    1, 1]),g.STATIC_DRAW);
g.enableVertexAttribArray(pLocation);
g.vertexAttribPointer(pLocation,2,g.FLOAT,false,0,0);

//Set Shader time variable iGlobalTime
tLocation=g.getUniformLocation(p,"iGlobalTime");

//Get Inicial Time
initTime=Date.now();

//Render Frame loop
(function draw(){
  //Set time
  g.uniform1f(tLocation,(Date.now()-initTime)*0.001);
  //Draw
  g.drawArrays(g.TRIANGLES,0,6);
  requestAnimationFrame(draw);
})();
