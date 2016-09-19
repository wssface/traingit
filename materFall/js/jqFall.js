/**
 * Created by admin on 2016/9/18.
 */
$(function(){
    waterfall();
    var dataInt={"data":[{"src":'5.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'1.jpg'},{"src":'10.jpg'}]}
    $(window).on('scroll',function(){
        if(checkScrollSlide){
            $.each(dataInt.data,function(key,val){
                var box=$('<div>').addClass('box');
                $("#main").append(box);
                var pic=$('<div>').addClass('pic');
                $(box).append(pic);
                $("<img>").attr('src','img/'+$(value).attr('src')).appendTo($(pic));
            })
            waterfall();
        }
    })
});
function waterfall(){
    var $boxs=$("#main>div");
    var w=$boxs.eq(0).outerWidth();//outerWidth包含padding，border在内
    var cols=Math.floor($(window).width()/w);
    $('#main').width(w*cols).css("margin","0 auto");
    var hArr=[];
    $boxs.each(function(index,value){
        var h=$boxs.eq(index).outerHeight();
        if(index<cols){
            hArr[index]=h;
        }else{
            var minH=Math.min.apply(null,hArr);
            var minHIndex= $.inArray(minH,hArr);//$.inArray  判断某个值在某个数组的索引
            $(value).css({  //吧dom对象转化成jq对象
                'position':'absolute',
                'top':minH+"px",
                'left':minHIndex*w+"px"
            });
            hArr[minHIndex]+=$boxs.eq(index).outerHeight();
        }
    });
}

function checkScrollSlide(){
    var $lastBox=$("#main>div").last();
    var lastBoxH=$lastBox.offset().top+Math.floor($lastBox.height()/2);
    var scrollTop=$(window).scrollTop();
    var docuH=$(window).height();
    return (lastBoxH<scrollTop+docuH)?true:false;
}