/*var data = "";
var a;
for (var i = 0; i < 32; i++) {
  functAry[i] = Math.sin(((2 * Math.PI) / 31) * (i));
  a = String(functAry[i]);
  data += a + "\r\n";
}

const fs = require("fs");
fs.writeFile("J Son is a god.txt", data, function(error, data) {
  if (error) {
    throw error;
  }
  console.log("write is completed");
});
*/

var b;
var funcAry = new Array();
for (var i = 0; i < 64; i++) {
  funcAry[i] = Math.sin(((2 * Math.PI) / 63) * i);
}

var fft = require("fft-js").fft,
  fftUtil = require("fft-js").util,
  signal = funcAry;

var phasors = fft(signal);

var frequencies = fftUtil.fftFreq(phasors, 8000), // Sample rate and coef is just used for length, and frequency step
  magnitudes = fftUtil.fftMag(phasors);

var both = frequencies.map(function(f, ix) {
  return { frequency: f, magnitude: magnitudes[ix] };
});

console.log(both);
