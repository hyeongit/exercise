/*
writedown an array of 64 values of sine waveform which starts from zero point and is arranged at same intervals in text file.
*/
let data = "";
const functAry = new Array();

{
  let a;
  for (let i = 0; i < 64; i++) {
    functAry[i] = Math.sin(((2 * Math.PI) / 63) * i);
    a = String(functAry[i]);
    data += a + "\r\n";
  }
}

const fs = require("fs");
fs.writeFile("J Son is a god.txt", data, function(error, data) {
  if (error) {
    throw error;
  }
  console.log("write is completed");
});

//fft caculation

/*
var fft = require("fft-js").fft,
  fftUtil = require("fft-js").util,
*/

const { fft, util: fftUtil } = require("fft-js");
const signal = functAry;

const phasors = fft(signal);

const frequencies = fftUtil.fftFreq(phasors, 8000); // Sample rate and coef is just used for length, and frequency step
const magnitudes = fftUtil.fftMag(phasors);

const both = frequencies.map(function(f, ix) {
  return { frequency: f, magnitude: magnitudes[ix] };
});

console.log(both);
