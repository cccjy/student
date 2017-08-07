//国内新房和二手房详情幻灯片
$(document).ready(function (){
//点击小图切换大图
$("#thumbnail li a").click(function(){
$(".gn_fangyuan04 img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
$("#thumbnail li.current").removeClass("current");
$(this).parents("li").addClass("current");
return false;
});
$(".gn_fangyuan04>img").load(function(){
$(".gn_fangyuan04>img:hidden").fadeIn(500);
});
//小图片左右滚动
var $slider_01 = $('.hd_xiaotu ul');
var $huadong_geshu = $('.hd_xiaotu ul li').length;
var $huadong_width = $('.hd_xiaotu ul li').width();
$slider_01.width($huadong_geshu * $huadong_width);	
var huadong_01 = 0;
if ($huadong_geshu < 5) {
$('#btn_right01').css({cursor: 'auto'});
$('#btn_right01').removeClass("dasabled");
}
$('#btn_right01').click(function() {
if ($huadong_geshu < 5 || huadong_01 >= $huadong_geshu - 5) {
return false;
}		
huadong_01++;
$slider_01.animate({left: '-=' + $huadong_width + 'px'}, 'fast');
slider_pic01();
});	
$('#btn_left01').click(function() {
if (huadong_01 <= 0) {
return false;
}
huadong_01--;
$slider_01.animate({left: '+=' + $huadong_width + 'px'}, 'fast');
slider_pic01();
});	
function slider_pic01() {
if (huadong_01 >= $huadong_geshu - 5) {
$('#btn_right01').css({cursor: 'auto'});
$('#btn_right01').addClass("dasabled");
}
else if (huadong_01 > 0 && huadong_01 <= $huadong_geshu - 5) {
$('#btn_left01').css({cursor: 'pointer'});
$('#btn_left01').removeClass("dasabled");
$('#btn_right01').css({cursor: 'pointer'});
$('#btn_right01').removeClass("dasabled");
}
else if (huadong_01 <= 0) {
$('#btn_left01').css({cursor: 'auto'});
$('#btn_left01').addClass("dasabled");
}
}	
});