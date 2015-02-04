t = 0;
W = a.width /= 4;
H = a.height /= 4;
imageData = c.createImageData(W, H);
pixels = imageData.data;

function sphere(x, y, z, size) {
    // return Math.max(Math.max(Math.abs(x)-size, Math.abs(y)-size), Math.abs(z)-size);
    return Math.sqrt(x * x + y * y + z * z) - size;
}


boxes = [
    [100, 50, 100],
    [350, 50, 100]
];

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
            var len = Math.sqrt(dx * dx + dy * dy + dz * dz);
            var rayDirection = [dx/len, dy/len, dz/len];

          /*  stepX = (dx / len * step)* len / eyeZ * mul;
            stepY = (dy / len * step)* len / eyeZ * mul;
            stepZ = (dz / len * step)* len / eyeZ * mul;
*/
            rx = eyeX;
            ry = eyeY;
            rz = eyeZ;

            var hit = false;
            var step = 0;
            var it = 0;
            for (; rz < 255;) {
                it++;
                var dist = 10000000;
                for (var b in boxes) {
                    dist = Math.min(dist, sphere(rx - boxes[b][0] + 90 * Math.cos(t), ry - boxes[b][1], rz - boxes[b][2], 50));
                }
                if (dist < 5) {
                    hit = true;
                    break;
                }
                step += dist;// dist / 2;
                rx = eyeX + rayDirection[0] * step;
                ry = eyeY + rayDirection[1] * step;
                rz = eyeZ + rayDirection[2] * step;
            }

            // console.log(it);

            i = (x + y * W) * 4;

            if (hit) {
                pixels[i + 0] = 255;
                pixels[i + 1] = it / 2;
                pixels[i + 2] = 255;
                pixels[i + 3] = 255;
            } else {
                pixels[i + 0] = 0;
                pixels[i + 1] = 0;
                pixels[i + 2] = 0;
                pixels[i + 3] = 255;
            }

        }
    }
    c.putImageData(imageData, 0, 0);
}

setInterval(draw, 16);
// draw();
