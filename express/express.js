//引入框架
var express=require('express');
var mysql=require('mysql');

var connection=mysql.createConnection({
	host:"location",
	user:"root",
	password:"",
	database:"cms"
})
connection.connect();
//创建应用
var app=express();
//匹配路由
app.get('/',function(req,res){
//	connection.query('select * from news',function(err,data){
		console.log(data)
	})
	res.send('hello world');
})
app.get('/add/:id/:age',function(req,res){
	//追加请求头
	res.append("Access-Control-Allow-Origin","*");
	console.log(req.query);
	
	console.log(req.params);
	res.send('增加信息');
})
app.post('/add',function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	
	console.log(req.body);
	connection.query("insert into news (title,text) values('"+req.body.title+"','"+req.body.text+"')");
	res.send('删除信息');
})
//匹配端口
app.listen(3000);
