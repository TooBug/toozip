# toozip

compress a folder to a zip file.

	var fs = require("fs");
	var zip = require("../source/index.js");

	var archive = new zip();

	archive.zipFolder('test','test.zip');
	

## Thanks

- <https://github.com/janjongboom/node-native-zip>( [the forked version](https://github.com/onkis/node-native-zip) works indeed.)
- <https://github.com/ryanmcgrath/wrench-js>


## Additions

This project is part of the [solo](https://github.com/toooobug/solo), a static blog based on Node.js.