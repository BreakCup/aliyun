var url = require('url');

var reqStr = {
	jump:'/jump',
	getAcessToken:'/GAT'
};

//路由函数
var route = function(url){
	var myURL = new URL(url);
	if(!reqStr[myURL.pathname]){
		console.log("404");
		return 404;
	}
	else{
		console.log("200");
	}
}