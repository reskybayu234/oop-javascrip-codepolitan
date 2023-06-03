function convertColor(r,g,b) {
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.hex = function() {
        let { r, g, b} = this;
        return '#' + ((1<<24) + (r<<16) + (g <<8) + b).toString(16).slice(1);
    }

    color.rgb = function () {
        let { r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`
    }


    return color
}


const color = convertColor(123, 2, 3)
let result = color.hex()
console.log('result', result)