/**
 * Created by admin on 2016/8/31.
 */
window.onload=function(){
    var container=document.getElementById("container");
    var imgs=container.getElementsByTagName("img");
    //单张图宽度
    var imgWidth=imgs[0].offsetWidth;
    //设置掩藏们露出宽度
    var exposWidth=160;
    //容器总宽度
    var conWidth=imgWidth+(imgs.length-1)*exposWidth;
    container.style.width=conWidth+'px';
    //设置每道门初始位置
    function setImgPot(){
        for(var i=1;i<imgs.length;i++){
            imgs[i].style.left=imgWidth+exposWidth*(i-1)+'px';
        }
    }
    setImgPot();
    //计算每道门打开时应移动的距离
    var trans=imgWidth-exposWidth;
    //为每道门绑定事件
    for(var i=0;i<imgs.length;i++){
        //使用立即调用的函数表达式，获取不同的i
        (function(i){
            imgs[i].onmouseover=function(){
                //先将每道门复位
                setImgPot();
                //打开门
                for(var j=1;j<=i;j++){
                    imgs[j].style.left=parseInt(imgs[j].style.left)-trans+'px';
                }
            }
        })(i);
    }
}