//引入http模块
var http = require("http");
//引入socket.io模块
var ioFunc = require("socket.io");
//创建普通服务器
var server = http.createServer(function(req,res){
	res.end("start socket.io server")
})
//实例化第一个socket的服务端
var io = ioFunc(server);
//创建连接
io.on("connection",function(socket){
	//接受
	socket.on("message",function(data){
		console.log(data)
		//发送 自发自收
		//socket.emit("say",data);
		//自发全收
		io.sockets.emit("say",data);
	})
})
//用8899端口去监听这个服务器
server.listen(8899);
console.log("开启socket.io服务器")
