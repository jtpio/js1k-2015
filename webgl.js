//Original source before manual size optimizations

//VERTEX_SHADER
var vs=""+
"attribute vec2 p;"+
"void main(){"+
"  gl_Position=vec4(p,0,1);"+
"}";

//FRAGMENT_SHADER
var fs=""+
//"#ifdef GL_ES"+
"precision highp float;"+
//"#endif"+
""+
"uniform float iGlobalTime;"+
""+
"vec2 iResolution=vec2("+a.width+","+a.height+");"+
""+
"float box(vec3 p, vec3 b, float size){" +
"  return length(max(abs(p)-b,0.0)) - size;" +
"}" +
"" +
"float cylinder(vec2 pos) {" +
"    return length(pos) - 0.04;" +
"}" +
"" +
"void main(void)" +
"{" +
"    vec2 uv = gl_FragCoord.xy / iResolution.xy - 0.5;" +
"    uv.y *= 0.85;" +
"" +
"    float ratio = iResolution.x / iResolution.y;" +
"    uv.x *= ratio;" +
"" +
"    vec3 ray = normalize(vec3(uv,0.5));" +
"" +
"    float t = 0.0;" +
"    float d = 0.0;" +
"    vec3 col;" +
"" +
"    for(int i = 0; i < 50; ++i){" +
"        vec3 pos = ray*t;" +
"        pos.z += iGlobalTime/4.0;" +
"        pos = fract(pos) - 0.5;" +
"" +
"        d = box(pos, vec3(0.05, 0.05, 0.05), 0.04);" +
"        col = vec3(1.0, 1.0, 0.0);" +
"        float k = d;" +
"        for (float j = 0.0; j < 3.0; j++) {" +
"            float id = floor(fract(j/3.0)*3.0);" +
"            if (id == 0.0) {" +
"                k = cylinder(pos.xy);" +
"            } else if (id == 1.0) {" +
"                k = cylinder(pos.xz);" +
"            } else if (id == 2.0) {" +
"                k = cylinder(pos.yz);" +
"            }" +
"            if(k<d){" +
"                d=k;" +
"                col=vec3(0.2,1.0,0.1) * j / 0.2;" +
"            }" +
"        }" +
"" +
"        t+=d;" +
"    }" +
"" +
"    float tint = 1.0 / (t*t*t);" +
"    gl_FragColor = vec4(tint*col, 1.0);" +
"}";

function compileShader(g, shaderSource, shaderType) {
  var shader=g.createShader(shaderType);
  g.shaderSource(shader, shaderSource);
  g.compileShader(shader);
  //******** DEBUG ****************
  var ok = g.getShaderParameter(shader,g.COMPILE_STATUS);
  if (!ok) {throw "Shader Compile Error:" + g.getShaderInfoLog(shader);}
  //******** DEBUG ****************
  return shader;
}

function createProgram(vertexShaderSource,fragmentShaderSource){
  var p=g.createProgram();
  g.attachShader(p,compileShader(g,vs,g.VERTEX_SHADER));
  g.attachShader(p,compileShader(g,fs,g.FRAGMENT_SHADER));
  g.linkProgram(p);
  //******** DEBUG ****************
  var ok= g.getProgramParameter(p,g.LINK_STATUS);
  if (!ok){throw ("Shader Link Error:" +g.getProgramInfoLog(p));}
  //******** DEBUG ****************
  g.useProgram(p);
  return p;
}

//Create Shader
var p=createProgram(vs,fs);

//Set Shader vertex data
var pLocation=g.getAttribLocation(p,"p");
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
var tLocation=g.getUniformLocation(p,"iGlobalTime");

//Get Inicial Time
var initTime=Date.now();

//Render Frame loop
function draw(){
  //Set time
  g.uniform1f(tLocation,(Date.now()-initTime)*0.001);
  //Draw
  g.drawArrays(g.TRIANGLES,0,6);
  requestAnimationFrame(draw);
}
draw();