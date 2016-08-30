/**
 * Created by admin on 2016/8/30.
 */
 window.onload=function(){
     var count=document.getElementsByTagName("div")[0];
     var li=count.getElementsByTagName("li");
     var box=document.getElementById("box");
     var div=box.getElementsByTagName("div");
     for(var i=0;i<li.length;i++){
         li[i].index=i;
        li[i].onclick=function(){
            for(var n=0;n<li.length;n++){
                li[n].className="";

            }
            this.className="active";
            for(var j=0;j<div.length;j++){
                div[j].className="hid";
            }
            div[this.index].className="show";
        }
     }

 }
