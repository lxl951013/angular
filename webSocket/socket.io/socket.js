//引入http、socket.io模块
var http=require('http');
var ioFun=require('socket.io');

//创建普通服务器
var server=http.createServer(function(req,res){
	res.end('start socket.io server');
	//console.log(8888)
});
//实例化第一个socket的服务端
var io=ioFun(server);
//创建连接
io.on('connection',function(socket){
	socket.on('message',function(data){
		console.log(data)
		
		io.sockets.emit('say',data);
	})
})
//用8899这个端口监听服务器
server.listen(8899);
console.log('开启socket.io服务器');
