({
	appDir: "./",
	dir: "./dist",
	baseUrl: "./js/",
	modules: [
		{name: "main"}
	], 
	fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/,
	generateSourceMaps: true,
	preserveLicenseComments: false,
	//默认为uglify（压缩），none为不压缩仅合并（开发阶段可调试）
	optimize: "uglify",
	optimizeCss: 'standard',
	removeCombined: true,
	paths: {
　　　　　　"JSON": "json2",
			"jquery": "jquery-3.2.1.min"
　　　　},
	shim: {
　　　　　　'JSON':{
　　　　　　　　exports: 'JSON'
　　　　　　}
　　　　}

})