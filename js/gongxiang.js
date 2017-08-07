//TAB切换菜单
function tab_hanshu(bqxx,nrxx,ssxx_id,idgsxx)
{
for (zs_id=0;zs_id<idgsxx;zs_id++)
{
document.getElementById(bqxx+zs_id).className = "moren";
document.getElementById(nrxx+zs_id).style.display = "none";
}
document.getElementById(bqxx+ssxx_id).className = "this";
document.getElementById(nrxx+ssxx_id).style.display = "";
}
//选择城市
$(document).ready(function(){
$("#xuanzegj").hover(function(){
$("#guojia_nr").slideDown(260);
});
$("#xuanzegj").mouseleave(function(){
$("#guojia_nr").slideUp(260);
});
});
//返回顶部
$(function(){
$("#totop").hide();
$(function () {
$(window).scroll(function(){
if ($(window).scrollTop()>100){
$("#totop").fadeIn();
}
else
{
$("#totop").fadeOut();
}
});
$("#totop").click(function(){
$('body,html').animate({scrollTop:0},500);
return false;
});
});
});
$(document).ready(function(){
$("#fanhui_top").mouseleave(function(){
$("#fanhui_top_02").hide();
});
});
//展开的收起
function shouqi_hanshu(ob,fang_boxid02){
$(ob).parent().removeAttr("style");
$(ob).hide().prev('.gengduo').show();
}
function gengduo_hanshu(ob,fang_boxid02){
$(ob).hide().next('.shouqi').show();
$(ob).parent().css("height", $("#"+fang_boxid02).height()+'px');
}
//展开收起新房列表用到
function shouqi_hanshu2(ul_id,fang_boxid02){
$("#"+ul_id).removeAttr("style");
}
function gengduo_hanshu2(ul_id,fang_boxid02){
$("#"+ul_id).css("height", $("#"+fang_boxid02).height()+'px');
}
//公用滑出隐藏和显示
function gong_show(id){
$("#"+id).show();
};
function gong_hide(id){
$("#"+id).hide();
};
//锚点链接特效
$(document).ready(function() {
$('a[href*=#]').click(function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var $target = $(this.hash);
$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
if ($target.length) {
var targetOffset = $target.offset().top;
$('html,body').animate({
scrollTop: targetOffset
},
1000);
return false;
}
}
});
});
//导航菜单
$(document).ready(function() {
$('.huachu_erji').hover(
function(){
$(this).children('.sanji_class').slideDown(260);
},
function(){
$(this).children('.sanji_class').slideUp(260);
}
);
});
function Over_nav(o){o.firstChild.className="this_01";}
function Out_nav(o){o.firstChild.className="";}
//首页幻灯片
function gong_hdp01(hdp_id01,hdp_id02,hdp_id03,hdp_id04,hdp_id05){
var sWidth_hdp01 = $("#"+hdp_id01).width();
var len_hdp01 = $("#"+hdp_id02).length;
var index = 0;
var picTimer_hdp01;
//左边按钮
$("#"+hdp_id03).click(function() {
index -= 1;
if(index == -1) {index = len_hdp01 - 1;}
showPics(index);
});
//右边按钮
$("#"+hdp_id04).click(function() {
index += 1;
if(index == len_hdp01) {index = 0;}
showPics(index);
});
$("#"+hdp_id05).css("width",sWidth_hdp01 * (len_hdp01));
$("#"+hdp_id01).hover(function() {
clearInterval(picTimer_hdp01);
},function() {
picTimer_hdp01 = setInterval(function() {
showPics(index);
index++;
if(index == len_hdp01) {index = 0;}
},2000);
}).trigger("mouseleave");
function showPics(index) {
var nowLeft = -index*sWidth_hdp01;
$("#"+hdp_id05).stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
}
}
//左右滚动图片
$(function(){
var $fang_shuliang = 1;//初始化显示的版面
var $fang_xss = 4;//每版显示数
var $fang_changdu = $('.fangyuan_gundong02>ul').length;//计算列表总长度(个数)
var $fang_sudu = Math.ceil($fang_changdu / $fang_xss);
//计算展示版面数量
var $width_fang = $('.fangyuan_gundong01').width();//取得展示区外围宽度
var $fangyuan_gundong02 = $('.fangyuan_gundong02');
var $num_fang = $('span.num li')
var $fang_leftgd = $('.fang_leftgd')
var $fang_rightgd = $('.fang_rightgd');
var $autoFun_fang;
//调用自动滚动
fang_didonggd();
//向前滚动
$fang_leftgd.click(function(){
if (!$fangyuan_gundong02.is(':animated')) {  //判断展示区是否动画
if ($fang_shuliang == 1) {   //在第一个版面时,再向前滚动到最后一个版面
$fangyuan_gundong02.animate({
left: '-=' + $width_fang * ($fang_sudu - 1)
}, 1000); //改变left值,切换显示版面,500(ms)为滚动时间,下同
$fang_shuliang = $fang_sudu; //初始化版面为最后一个版面
}
else { 
$fangyuan_gundong02.animate({
left: '+=' + $width_fang
}, 1000); //改变left值,切换显示版面
$fang_shuliang--; //版面累减
}
}
});
//向后滚动
$fang_rightgd.click(function(){
if (!$fangyuan_gundong02.is(':animated')) { //判断展示区是否动画
if ($fang_shuliang == $fang_sudu) {  //在最后一个版面时,再向后滚动到第一个版面
$fangyuan_gundong02.animate({
left: 0
}, 1000); //改变left值,切换显示版面,500(ms)为滚动时间,下同
$fang_shuliang = 1; //初始化版面为第一个版面
}
else {
$fangyuan_gundong02.animate({
left: '-=' + $width_fang
}, 1000);//改变left值,切换显示版面
$fang_shuliang++; //版面数累加
}
}
});
//停止滚动
clearFun_f01($fangyuan_gundong02);
clearFun_f01($fang_leftgd);
clearFun_f01($fang_rightgd);
clearFun_f01($num_fang);
//事件划入时停止自动滚动
function clearFun_f01(elem){
elem.hover(function(){
clear_gd();
}, function(){
fang_didonggd();
});
}
//自动滚动
function fang_didonggd(){
$fang_rightgd.trigger('click');
$autoFun_fang = setTimeout(fang_didonggd, 3000);//此处不可使用setInterval,setInterval是重复执行传入函数,这会引起第二次划入时停止失效
}
//清除自动滚动
function clear_gd(){
clearTimeout($autoFun_fang);
}
});
//房产详细幻灯片
$(document).ready(function(){
$('#fang_rightpic ul:first').addClass('dq_this');
$('.fang_xiangxi04:first').slideDown(200);
})
var i=-1;
var offset_01 =10000; //轮换时间
var timer_01 = null;
function fang_hdp01(){
tupian_zushu = $('.fang_xiangxi04').length
n = $('#fang_rightpic ul').length-1;
i++;
if(i > n){
i = 0;
}
slide_fang(i);
timer_01 = window.setTimeout(fang_hdp01, offset_01);
}
function slide_fang(i){
$('#fang_rightpic ul').eq(i).addClass('dq_this').siblings().removeClass('dq_this');
$('.fang_xiangxi04').eq(i).css('display','block').siblings('.fang_xiangxi04').slideUp(200);
var pic_zhu=document.getElementById('tupain_zhu');
var zonggeshu = $('#fang_rightpic ul').length;
var pic_zhongsu=document.getElementById('pic_zhongsu');
pic_zhongsu.innerHTML=zonggeshu;
if(i == tupian_zushu){
pic_zhu.innerHTML=i+"/"+tupian_zushu;	
}else{
pic_zhu.innerHTML=i+1+"/"+tupian_zushu;
}
}
function hookThumb_fang(){    
$('#fang_rightpic ul').hover(
function(){
if(timer_01){
clearTimeout(timer_01);
i = $(this).prevAll().length;
slide_fang(i); 
}
},function(){
timer_01 = window.setTimeout(fang_hdp01, offset_01);  
this.blur();            
return false;
}); 
}
function up_fang(){
var zuol = $('#fang_rightpic ul').length;
if(i>0  && i== zuol){
slide_fang(i-2);
i--;
}else if(i>0  && i!= zuol){
slide_fang(i-1);
i--;
}
}
function down_fang(){
var zuol = $('#fang_rightpic ul').length;
if( i < zuol ){
slide_fang(i+1);
i++;
}
}
//弹出选择城市注册登录等框
function guanbi_div(div_id,zz_id){
$("#"+div_id).fadeOut(function(){ $("#"+zz_id).hide();});
return false;
}
function tanchu_div(zz_id,div_id,width_kd){
var h = $(document).height();
$("#"+zz_id).css({ 'height': h });
$("#"+div_id).css("width",width_kd+"px");
$("#"+zz_id).show();
$("#"+div_id).center();
$("#"+div_id).fadeIn();
return false;
}
jQuery.fn.center=function(loaded) {
var obj_01 = this;
body_width01 = parseInt($(window).width());
body_height01 = parseInt($(window).height());
block_width01 = parseInt(obj_01.width());
block_height02 = parseInt(obj_01.height());
left_position01 = parseInt((body_width01/2) - (block_width01/2)  + $(window).scrollLeft());
if (body_width01<block_width01) { left_position01 = 0 + $(window).scrollLeft(); };
top_position = parseInt((body_height01/2) - (block_height02/2) + $(window).scrollTop());
if (body_height01<block_height02) { top_position = 0 + $(window).scrollTop(); };
if(!loaded) {
obj_01.css({'position': 'absolute'});
obj_01.css({ 'top': top_position, 'left': left_position01 });
$(window).bind('resize', function() { 
obj_01.center(!loaded);
});
$(window).bind('scroll', function() { 
obj_01.center(!loaded);
});
} else {
obj_01.stop();
obj_01.css({'position':'absolute'});
obj_01.animate({ 'top':top_position },500,'linear');
}
}
//国内新房源滚动到指定高度定位
$(document).ready(function(){						   
dingwei_01('gn_xinfangid');
});
function dingwei_01(id, s) {
var obj = document.getElementById(id);
if (obj == null) {
return false;
}
if (typeof s != 'undefined') {
var gaodu_f01 = s;
} else {
var gaodu_f01 = obj.offsetTop;
}
window.onscroll = function(){
dingwei_02(id, gaodu_f01);
}
}

function dingwei_02(id, height) {
var obj = document.getElementById(id);
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
if (scrollTop < height) {
if (typeof document.body.style.maxHeight === "undefined") {
//alert('IE6 Detected');
obj.style.position = 'relative';
obj.style.top = "0px";
} else {
obj.style.position='relative';
obj.style.marginTop=''
}
} else {
if (typeof document.body.style.maxHeight === "undefined") {
//alert('IE6 Detected');
obj.style.position='absolute';
obj.style.top = scrollTop + "px";
} else {
obj.style.position ='fixed';obj.style.marginTop='0';
}
}
}
//切换标签
function $_huanshu(obj){
return document.getElementById(obj);
}
function xinfang_bq(n,sl,fang){
for (var i=1;i<sl;i++){
if(n==i){
$_huanshu(fang+i).className="this";
}else{
$_huanshu(fang+i).className="moren";
}
}
}