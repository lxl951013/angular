var fs=require('fs');
console.log('fs');

var data=fs.readFileSync('ajax.html');
console.log(data.toString());
