var http = require('http');
var router = require('./router.js')

var server = http.createServer();

server.on('require',function(req,res){
	console.log("接收到请求");
	req.setEncoding('utf-8');
	router.route("http://39.108.117.154:80"+req.url);
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("aa");
	response.end();
});

server.listen(80,function(){
	console.log("开始监听");
});

server.on('error', (e) => {
    if(e.code === 'EADDRINUSE') {
        console.log('端口被占用');
    }else {
        console.log(`发生错误：${e.code}`);
    }
});