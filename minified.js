function cube(x,y,z,size){return Math.max(Math.max(Math.abs(x)-size,Math.abs(y)-size),Math.abs(z)-size)}function draw(){for(t+=.1,i=0,eyeX=W/2,eyeY=H/2,eyeZ=40,step=1,x=0;x<W;x++)for(y=0;y<H;y++){var dx=x-eyeX,dy=y-eyeY,dz=0+eyeZ,len=Math.sqrt(dx*dx+dy*dy+dz*dz),mul=50;stepX=dx/len*step*len/eyeZ*mul,stepY=dy/len*step*len/eyeZ*mul,stepZ=dz/len*step*len/eyeZ*mul,rx=eyeX,ry=eyeY,rz=eyeZ;for(var hit=!1,dist=1e4;rz<200;){if(dist=cube(rx-cubePos[0]+90*Math.cos(t),ry-cubePos[1],rz-cubePos[2],50),10>dist){hit=!0;break}rx+=stepX,ry+=stepY,rz+=stepZ}i=4*(x+y*W),hit?(pixels[i+0]=255,pixels[i+1]=50*dist,pixels[i+2]=0,pixels[i+3]=255):(pixels[i+0]=0,pixels[i+1]=255,pixels[i+2]=0,pixels[i+3]=255)}c.putImageData(imageData,0,0)}t=0,W=a.width/=4,H=a.height/=4,imageData=c.createImageData(W,H),pixels=imageData.data,cubePos=[100,50,50],setInterval(draw,16);