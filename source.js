W = a.width = 440,
H = a.height = 300;
t = 0;

setInterval(function () {
    t+=0.1;
    c.fillStyle = "rgb(" + ~~(Math.abs(Math.sin(t + 0.2))*255) + ", " + ~~(Math.abs(Math.sin(t + 0.3))*255) + ", " + ~~(Math.abs(Math.cos(t + 0.4))*255) + ")";
    c.fillRect(0, 0, W, H);
}, 33);

