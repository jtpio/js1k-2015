for(k in g)
  g[k.match(/^..|[A-V]/g).join("")]=g[k];

W = a.width/=1.5;
H = a.height/=1.5;

with(g){
    for(x=crP(t=r=2);t;coS(s),atS(x,s))
        shS(s=crS(35634-t),

          --t?"precision highp float;"+
          "uniform float iGlobalTime;"+
          "vec2 iResolution=vec2("+W+","+H+");"+
          "vec2 v(vec2 x,vec2 y)" +
          "{" +
          "return x.x<y.x?x:y;" +
          "}" +
          "float v(vec2 v)" +
          "{" +
          "return v=v*v,v=v*v,v=v*v,pow(v.x+v.y,.125);" +
          "}" +
          "vec2 x(vec3 m)" +
          "{" +
          "vec2 x=abs(vec2(length(m.xy),m.z-99.+mod(iGlobalTime*20.,198.)))-vec2(.7,5.);" +
          "float y=min(max(x.x,x.y),0.)+length(max(x,0.));" +
          "return v(v(vec2(y,50.),vec2(length(m.yx)-.5,3.)),vec2(v(vec2(v(m.xy)-.9,mod(m.z,5.)-2.5))-.2,.1));" +
          "}" +
          "vec2 m(vec3 m)" +
          "{" +
          "vec2 y=vec2(1.);" +
          "for(float i=.3;i<.6;i+=.1)" +
          "{" +
          "float s=sin(i*18.),l=cos(i*18.);" +
          "y=v(y,x(vec3(l*m.x+s*m.z,m.y,-s*m.x+l*m.z)+vec3(2.,sqrt(i)*30.-15.,1.)));" +
          "}" +
          "return y;" +
          "}" +
          "void main()" +
          "{" +
          "vec2 v=-1.+2.*gl_FragCoord.xy/iResolution.xy;" +
          "v.x*=iResolution.x/iResolution.y;" +
          "vec3 i=vec3(0.,-5.,-9.),s=normalize(vec3(v.xy,1.5));" +
          "float y=1.;" +
          "for(int x=0;x<99;x++)" +
          "{" +
          "float l=m(i+s*y).x;" +
          "if(l<.01||y>60.)" +
          "break;" +
          "y+=l;" +
          "}" +
          "vec3 x=vec3(0),l=i+y*s;" +
          "if(y<60.)" +
          "{" +
          "vec3 n=vec3(.001,x.yz),z=normalize(vec3(m(l+n.xyy).x-m(l-n.xyy).x,m(l+n.yxy).x-m(l-n.yxy).x,m(l+n.yyx).x-m(l-n.yyx).x)),d=normalize(vec3(-.6,1.,-.5));" +
          "float r=max(0.,dot(z,d));" +
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
          "float e=max(0.,dot(z,d));" +
          "x=.4*(1.+sin(vec3(.5,.42,0)*(m(l).y-1.)))*(1.+r+step(.35,e*e));" +
          "}" +
          "gl_FragColor=vec4(mix(x,vec3(0.),smoothstep(.5,49.,length(l))),1.);" +
          "}"
          :"attribute vec4 a;void main(){gl_Position=a;}");

    veAP(enVAA(biB(34962,crB())), 2, 5126, liP(x), usP(x),
        buD(34962,new Float32Array([1,1,1,-3,-3,1]),35044)
        );

    setInterval(
        'g.drA(4,g.uniform1f(g.geUL(x,"iGlobalTime"),r+=.07),3)',
        33)
};
