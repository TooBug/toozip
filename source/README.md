# toozip

zip folder

	var fs = require("fs");
	var zip = require("../source/index.js");

	var archive = new zip();

	archive.zipFolder(sourceFolder,destZipFile);