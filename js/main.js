require.config({
		baseUrl: "./js/",
		paths: {
　　　　　　"JSON": "json2",
			"jquery": "jquery-3.2.1.min"
　　　　},
        shim: {
　　　　　　'JSON':{
　　　　　　　　exports: 'JSON'
　　　　　　}
　　　　}
	});


require(["JSON","jquery"], function (JSON, $) {
    var data = {name: 'john', age: 20, sex: 'man'};
	var strData = JSON.stringify(data);
	alert(strData);
	$("input[name=name]").val('Bob');
});
	


