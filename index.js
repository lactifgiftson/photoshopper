var PSD = require('psd');
var psd = PSD.fromFile("Ax7-survey.psd");
psd.parse();
 
console.log(psd.tree().export());

node = psd.tree().descendants()[0];
var descendantsLength = psd.tree().descendants().length;
 for (i=0; i < descendantsLength;i++)
 {
	 if(psd.tree().descendants()[i].get('objectEffects') != "undefined")
	 console.log(psd.tree().descendants()[i].get('typeTool'));
 }
// You can also use promises syntax for opening and parsing
PSD.open("Ax7-survey.psd").then(function (psd) {
  return psd.image.saveAsPng('./output.png');
}).then(function () {
  console.log("Finished!");
});
