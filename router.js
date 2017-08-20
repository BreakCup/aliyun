var URL = require('url');

var reqStr = {
	jump:'/jump',
	getAcessToken:'/GAT'
};

//路由函数
var route = function(url){
	var myURL = URL.parse(url,true);
	if(!reqStr[myURL.pathname]){
		console.log("404");
		return 404;
	}
	else{
		console.log("200");
	}
}

module.exports.route = route;