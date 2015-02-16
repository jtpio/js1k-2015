vs="attribute vec4 p;void main(){gl_Position=p;}";

fs="precision highp float;"+
"uniform float iGlobalTime;"+
"vec2 iResolution=vec2("+a.width+","+a.height+");"+
"vec2 v(vec2 x,vec2 y)" +
 "{" +
   "return x.x<y.x?x:y;" +
 "}" +
 "float v(vec2 v)" +
 "{" +
   "return v=v*v,v=v*v,v=v*v,pow(v.x+v.y,.125);" +
 "}" +
 "vec2 x(vec3 y)" +
 "{" +
   "vec2 x=abs(vec2(length(y.xy),y.z-99.+mod(iGlobalTime*20.,198.)))-vec2(.7,5.);" +
   "float i=min(max(x.x,x.y),0.)+length(max(x,0.));" +
   "return v(v(vec2(i,50.),vec2(length(y.yx)-.5,3.)),vec2(v(vec2(v(y.xy)-.9,mod(y.z,5.)-2.5))-.2,.05));" +
 "}" +
 "vec2 n(in vec3 y)" +
 "{" +
   "vec2 i=vec2(999.,0.);" +
   "for(float f=.3;f<.6;f+=.1)" +
     "{" +
       "float n=sin(f*18.),s=cos(f*18.);" +
       "i=v(i,x(vec3(s*y.x+n*y.z,y.y,-n*y.x+s*y.z)+vec3(2.,sqrt(f)*30.-15.,1.)));" +
     "}" +
   "return i;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 v=-1.+2.*gl_FragCoord.xy/iResolution.xy;" +
   "v.x*=iResolution.x/iResolution.y;" +
   "vec3 i=vec3(0.,sin(iGlobalTime)-5.,-10.),s=normalize(vec3(v.xy,1.5));" +
   "float y=1.;" +
   "for(int f=0;f<99;f++)" +
     "{" +
       "float x=n(i+s*y).x;" +
       "if(x<.01||y>60.)" +
         "break;" +
       "y+=x;" +
     "}" +
   "vec3 x=vec3(0.),f=i+y*s;" +
   "if(y<60.)" +
     "{" +
       "vec3 m=vec3(.001,x.yz),l=normalize(vec3(n(f+m.xyy).x-n(f-m.xyy).x,n(f+m.yxy).x-n(f-m.yxy).x,n(f+m.yyx).x-n(f-m.yyx).x)),z=normalize(vec3(-.6,.9,-.5));" +
       "float r=max(0.,dot(l,z));" +
       "if(r<.1)" +
         "r=0.;" +
       "else" +
         " if(r<.3)" +
           "r=.3;" +
         "else" +
           " if(r<.7)" +
             "r=.7;" +
           "else" +
             " r=1.;" +
       "float e=max(0.,dot(l,z));" +
       "x=.4*(1.+sin(vec3(.5,.42,0)*(n(f).y-1.)))*(1.+r+step(.35,e*e));" +
     "}" +
   "gl_FragColor=vec4(mix(x,vec3(0.),smoothstep(.5,49.,length(f))),1.);" +
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
