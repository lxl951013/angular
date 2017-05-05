var http =require('http');
var mysql=require('mysql');
var fs=require('fs');

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meizi"
})

connection.connect();

var cheerio = require("cheerio");
console.log('连接成功')

function download(url, callback) {
	http.get(url, function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			callback(data)
		});
	})
}

//"http://www.mzitu.com/zipai/comment-page-5/"
//http://www.mzitu.com/page/2/
//http://www.mmjpg.com/home/3
 //   node pochong-meinv
 
 //http://www.mzitu.com/mm/page/2/
 //http://www.mzitu.com/xinggan/comment-page-1/
download("http://www.mzitu.com/xinggan/comment-page-6/", function(data) {
//	console.log(data);
	//把html结构交给服务端的jq去处理
	var $ = cheerio.load(data);
	//console.log($("img"))
	var imgArr = [];
	$("img").each(function(index, ele) {
	//	$(ele).attr("src")
		//console.log("名字", $(ele).attr("alt"));
		//console.log("路径", $(ele).attr("src"));
		//插入数据库
	//	connection.query("insert into source (title,img) values ('" + $(ele).attr("alt") + "','" + $(ele).attr("src") + "')", function(err, data) {
			
	//	})
		imgArr.push($(ele).attr("src"))
	})
	downloadImg(imgArr)
})
var i = 0;

function downloadImg(imgArr) {
//	console.log(imgArr)
	var writerStream = fs.createWriteStream('./img1/' + i + '.jpg');
	http.get(imgArr[i], function(res) {
		res.pipe(writerStream)
		if(i < imgArr.length) {
			i++;
			downloadImg(imgArr)
		} else {
			return;
		}
	})
}
