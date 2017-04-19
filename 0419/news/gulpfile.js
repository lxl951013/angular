//1.引gulp包
var gulp =require('gulp');

//2.引入gulp插件
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');

//3.创建任务
gulp.task('minify',function(){
	//引入合并压缩文件
	gulp.src(['js/base/base.js','js/controller/*.js','js/directive/*.js','js/filter/*.js','js/router/*.js','js/service/*.js','js/base/bootstrap.js'])
	//合并
	.pipe(concat('main.js'))
	//压缩
	.pipe(uglify())
	//到处
	.pipe(gulp.dest('dist/js'))
})
//监听文件修改
gulp.watch('js/*/*.js',['minify'])
gulp.task('default',['minify'])
