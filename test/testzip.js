var fs = require("fs");
var zip = require("../source/index.js");

var archive = new zip();

/*archive.addFiles([ 
    { name: "demo.js", path: "./demo.js" },
    { name: "images/image.png", path: "./image.png" }
], function (err) {
    if (err) return console.log("err while adding files", err);

    var buff = archive.toBuffer(function(buff){
    	
	    fs.writeFile("./testzip.zip", buff, function () {
	        console.log("Finished");
	    });

    });

});*/

archive.zipFolder('./source','test_source.zip',function(){
	console.log('done');
});