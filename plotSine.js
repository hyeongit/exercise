var functAry = new Array();
var data = "";
var a;
for (var i = 0; i < 360; i++) {
  functAry[i] = Math.sin(((2 * Math.PI) / 360) * (i + 1));
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
