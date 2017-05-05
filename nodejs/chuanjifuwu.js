//引入模块
var module=require('./module.js');
console.log(module);

var http=require('http');

var url=require('url');

http.createServer(function(reauest,response){
	 
    var obj={
    	name:'xiuxiu',
    	age:18,
    }
}).listen(12345)

console.log('开启服务器')
