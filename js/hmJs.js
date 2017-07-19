// JavaScript Document

$(document).ready(function() {
	//回到顶部，滑动的速度
    $('.topbtn').click(function(){
		/*var speed=200;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;*/
		if(scroll=="off") return;
		$("html,body").animate({scrollTop: 0}, 500);
		});
	//全部分类
	var allClassify = $('.all_classify');
	allClassify.hover(
		function(){
			$(this).find('.slider_bar').show();
			},function(){
				$(this).find('.slider_bar').hide();
				}
	);
});
