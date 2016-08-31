/**
 * Created by admin on 2016/8/31.
 */
function myReady(fn){
    //现代浏览器对于domcontentloader事件的处理采用标准的事件绑定
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',fn,false);
    }else{
        IEContentLoaded(fn);
    }



    //ie模拟domcontentloader
    function IEContentLoaded(fn){
        var d = window.document;
        var done = false;
        //只执行一次用户的回调函数init
        var init = function(){
            if(!done){
                done=true;
                fn();
            }
        };


        (function(){
            try{
                //dom树未创建完之前调用doScroll会出现错误
                d.documentElement.doScroll('left');
            }catch (e){
                //延迟再试一次arguments.callee指调用这个方法本身
                setTimeout(arguments.callee,3000);
                return;
            }
            //没有错误就表示dom树创建完毕
            init();
        })();
        //监听document的加载状态
        d.onreadystatechange = function(){
            //如果用户在domready之后绑定的函数。就立刻执行
            if(d.readyState == 'complete'){
                d.onreadystatechange = null;
                init();
            }
        }
    }
}