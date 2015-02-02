t = 0;
W = a.width /= 4;
H = a.height /= 4;
imageData = c.createImageData(W, H);
pixels = imageData.data;

function draw () {
    t+=0.1;

    i = 0;
    for (x = 0; x < W; x++) {
        for (y = 0; y < H; y++) {
            for (k = i; i < k+4;) {
                pixels[i++]= ~~(Math.random() * 255);
            }
        }
    }
    c.putImageData(imageData, 0, 0);
}

setInterval(draw, 33);

