t = 0;
W = a.width /= 4;
H = a.height /= 4;
imageData = c.createImageData(W, H);
pixels = imageData.data;

function cube(x, y, z, size){
    return Math.max(Math.max(Math.abs(x)-size, Math.abs(y)-size), Math.abs(z)-size);
    // return Math.sqrt(x * x + y * y + z * z) - 40;
}

cubePos = [100, 50, 50];

function draw () {
    t+=0.1;

    i = 0;
    eyeX = W / 2;
    eyeY = H / 2;
    eyeZ = 40;
    step = 1;

    // raymarch
    for (x = 0; x < W; x++) {
        for (y = 0; y < H; y++) {
            var dx = (x - eyeX);
            var dy = (y - eyeY);
            var dz = (0 + eyeZ);
            var len = Math.sqrt(dx * dx + dy * dy + dz * dz);

            var mul = 50;
            stepX = (dx / len * step)* len / eyeZ * mul;
            stepY = (dy / len * step)* len / eyeZ * mul;
            stepZ = (dz / len * step)* len / eyeZ * mul;

            rx = eyeX;
            ry = eyeY;
            rz = eyeZ;
            var hit = false;
            var dist = 10000;
            for (; rz < 200;) {
                dist = cube(rx - cubePos[0] + 90 * Math.cos(t), ry - cubePos[1], rz - cubePos[2], 50);
                if (dist < 10) {
                    hit = true;
                    break;
                }
                rx += stepX;
                ry += stepY;
                rz += stepZ;
            }

            i = (x + y * W) * 4;

            if (hit) {
                pixels[i + 0] = 255;
                pixels[i + 1] = dist * 50;
                pixels[i + 2] = 0;
                pixels[i + 3] = 255;
            } else {
                pixels[i + 0] = 0;
                pixels[i + 1] = 255;
                pixels[i + 2] = 0;
                pixels[i + 3] = 255;
            }

        }
    }
    c.putImageData(imageData, 0, 0);
}

setInterval(draw, 16);
