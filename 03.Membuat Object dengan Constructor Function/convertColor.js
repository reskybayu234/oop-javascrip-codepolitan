// first create constructor function
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  let { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  let { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1) {
  let { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b}, ${a})`;
};

// instance of Color
let redRgb = new Color(12, 3, 4).rgb();
let redHex = new Color(12, 3, 4).hex();
let redRgba = new Color(12, 3, 4).rgba(2);

console.log("rgb :", redRgb, "hex :", redHex, "rgba :", redRgba);
