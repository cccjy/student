var time_gg = 500;
var h_gg = 0;
function ad_ggcx()
{
if(time_gg>0)
{
time_gg--;
h_gg = h_gg+5;
}
else
{
return;
}
if(h_gg>150)  //�߶�
{
return;
}
document.getElementById("top_adgg").style.display = "";
document.getElementById("top_adgg").style.height = h_gg+"px";
setTimeout("ad_ggcx()",30); 
}

window.onload = function showAds()
{
ad_ggcx();
setTimeout("noneAds_adgg()",7000); //ͣ��ʱ���Լ��ʵ�����
}
var T = 150;
var N = 150; //�߶�
function noneAds_adgg()
{
if(T>0)
{
T--;
N = N-5;
}
else
{
return;
}
if(N<0)
{
document.getElementById("top_adgg").style.display = "none";
return;
}

document.getElementById("top_adgg").style.height = N+"px";
setTimeout("noneAds_adgg()",30); 
}
function guanbi_ad()
{
//document.getElementById("top_adgg").style.display = "none";
document.getElementById("top_adgg").style.height = N+"px";
setTimeout("noneAds_adgg()",30); 
}