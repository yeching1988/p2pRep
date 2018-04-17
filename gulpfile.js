//引入gulp模块
var gulp = require('gulp');
//引入path模块
var path = require('path');
//引入less模块
var less = require('gulp-less');
//引入saa模块
var sass = require('gulp-sass');
//引入串行任务管理模块
var sequence = require('run-sequence');
//引入重命名模块
var rename = require('gulp-rename');
//引入压缩js插件模块
var uglify = require('gulp-uglify');
//引入删除模块
var del = require('del');
//引入热刷新模块
var liveReload = require('gulp-livereload');
//引入资源地图模块
var sourcemaps = require('gulp-sourcemaps');

//开发阶段
//编译less任务
gulp.task("less",function(){
	gulp.src("./src/less/*.less")//设置源文件路径
	.pipe(sourcemaps.init())
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))//调用插件的方法压缩js文件
	.pipe(sourcemaps.write("./maps"))
	.pipe(gulp.dest('./dist/css/'))//设置输出文件夹
	.pipe(liveReload())//调用热刷新方法
});
//编译sass
gulp.task("sass", function () {
   gulp.src("./src/sass/*.scss")//设置源文件路径
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))//调用插件的方法压缩js文件
   .pipe(sourcemaps.write("./maps"))
   .pipe(gulp.dest("./dist/css/"))
   .pipe(liveReload())
});
//观察者+热刷新
gulp.task("lessTasks", function() {
	//*表示匹配任意数量的字符
	//*表示匹配任意数量的字符
	gulp.src("./src/less/*.less")//设置源文件路径
	.pipe(sourcemaps.init())
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))//调用插件的方法去编译less
	.pipe(sourcemaps.write("./maps"))
	.pipe(gulp.dest("./dist/css/"))//设置输出文件夹，输出资源地图样式，index.css文件内容也会改变
	.pipe(liveReload())
});
//定义观察者任务
gulp.task("watch",function(){
	liveReload.listen();//开启监听
	gulp.watch("./src/**/*",["less","sass"]);//观察者，less变化就执行less编译；注意：改动less文件内容，浏览器会刷新liveReload.html样式
});

//发布阶段
//定义压缩css任务
gulp.task("task", function() {
	//*表示匹配任意数量的字符
	gulp.src("./dist/css/*.css")//设置源文件路径
	.pipe(uglify())//调用插件的方法压缩js文件
	.pipe(rename({
		suffix:".min"
	}))
	.pipe(gulp.dest("./dist/css/"))//设置输出文件夹
});
//清理垃圾文件
gulp.task("clear", function() {
	//*表示匹配任意数量的字符
	del("./temp/").then(function(){
		console.log("文件删除成功！！！");
	});
});