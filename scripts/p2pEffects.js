
$(function() {
	$(".navbar-right li").on("click", function() {
	    $(this).addClass("active").siblings("li").removeClass("active");
    });
    //文档加载完毕调用toolotip()显示工具提示
	$('[data-toggle="tooltip"]').tooltip();
	//点击左侧菜单li有加亮效果
	$("#leftSide .panel-body li").on("click", function() {
		$(this).addClass("active").siblings("li").removeClass("active");
	});
	//在电脑端操作时，点击切换按钮菜单就添加或移出active样式
	$("#toggleBtn").on("click",function(){
		$("#rightSide").toggleClass("active");
		var isActive = $("#rightSide").hasClass("active");
		console.log(isActive);
		if(isActive){
			//有active类样式即添加按钮是即将展开的效果
			$(this).html('<span class="glyphicon glyphicon-forward"></span>');
		}else{
			//没有active类样式即添加按钮即将是即将收起的效果
			$(this).html('<span class="glyphicon glyphicon-backward"></span>');
		}
	});
	//移动端手指滑动效果
	var startX=endX=0;
	$(document).on("touchstart",function(e){
		//console.log(e.originalEvent.changedTouches[0].clientX);
		startX=e.changedTouches[0].clientX;
		console.log(startX);
	});
	$(document).on("touchend",function(e){
	    endX=e.changedTouches[0].clientX;
		var moveDistance=endX-startX;
		//onsole.log("手指滑动的距离是：",moveDistance);
	    //trigger() 方法触发被选元素的指定事件类型。
	  	//语法： $(selector).trigger(event,[param1,param2,...])
	if(Math.abs(moveDistance)>30){
		$("#toggleBtn").trigger("click");
		}
	});
});
