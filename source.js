t = 0;
W = a.width /= 4;
H = a.height /= 4;
imageData = c.createImageData(W, H);
pixels = imageData.data;

function cube(x, y, z, size){
    // return Math.max(Math.max(Math.abs(x)-size, Math.abs(y)-size), Math.abs(z)-size);
    return Math.sqrt(x * x + y * y + z * z) - 40;
}

cubePos = [100, 50, 50];

function draw () {
    t+=0.1;

    i = 0;
    eyeX = W / 2;
    eyeY = H / 2;
    eyeZ = -40;

    // raymarch
    for (x = 0; x < W; x++) {
        for (y = 0; y < H; y++) {
            var dx = (x - eyeX);
            var dy = (y - eyeY);
            var dz = (0 - eyeZ);
            var mul = 2;
            var len = Math.sqrt(dx * dx + dy * dy + dz * dz) / mul;
            var rayUnit = [dx/len, dy/len, dz/len];

          /*  stepX = (dx / len * step)* len / eyeZ * mul;
            stepY = (dy / len * step)* len / eyeZ * mul;
            stepZ = (dz / len * step)* len / eyeZ * mul;
*/
            rx = eyeX;
            ry = eyeY;
            rz = eyeZ;

            step = 0;
            var hit = false;
            var dist = 10000;
            var it = 0;
            for (; rz < 255;) {
                it++;
                dist = cube(rx - cubePos[0] + 90 * Math.cos(t), ry - cubePos[1], rz - cubePos[2], 50);
                if (dist < 10) {
                    hit = true;
                    break;
                }
                step += 1;
                rx = eyeX + dx * step;
                ry = eyeY + dy * step;
                rz = eyeZ + dz * step;
            }

            i = (x + y * W) * 4;

            if (hit) {
                pixels[i + 0] = 255;
                pixels[i + 1] = it * 50;
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
