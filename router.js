var url = require('url');

var reqStr = {
	jump:'/jump',
	getAcessToken:'/GAT'
};

//路由函数
var route = function(geturl){
	var myURL = new url.URL(geturl);
	if(!reqStr[myURL.pathname]){
		console.log("404");
		return 404;
	}
	else{
		console.log("200");
	}
}

module.exports.route = route;