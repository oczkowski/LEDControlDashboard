module.exports = (length, color) => {
    if (!length || length < 0) length = 72;
    if (!color) color = 'rgb_w';
    // Base data
    const base = {
        mode: 'fill',
        modeConfig: {
            fadeDelay: 1000
        },
        data: []
    };
    // Loop over length
    for (let i = 0; i < length; i++) {
        if (color === 'rgb_w') {
            base.data.push({ r: 255, g: 255, b: 255 });
        } else if (color === 'rgbw_w') {
            base.data.push({ r: 0, g: 0, b: 0, w: 255 });
        } else if (color === 'red') {
            base.data.push({ r: 255, g: 0, b: 0 });
        } else if (color === 'green') {
            base.data.push({ r: 0, g: 255, b: 0 });
        } else if (color === 'blue') {
            base.data.push({ r: 0, g: 0, b: 255 });
        } else if (color === 'orange') {
            base.data.push({ r: 100, g: 65, b: 0 });
        } else if (color === 'purple') {
            base.data.push({ r: 128, g: 0, b: 128 });
        } else if (color === 'uv') {
            base.data.push({ r: 32, g: 22, b: 91 });
        } else if (color === 'aqua') {
            base.data.push({ r: 0, g: 255, b: 255 });
        } else if (color === 'pink') {
            base.data.push({ r: 255, g: 182, b: 193 });
        } else {
            base.data.push({ r: 0, g: 0, b: 0, w: 0 });
        }
    }
    // Return config
    return base;
};
