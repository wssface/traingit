/**
 * Created by admin on 2016/9/19.
 */
var getDom= function (id) {
    return document.getElementById(id);
}

var addEvent= function (id,event,fn) {//addEvent可以绑定多个事件
    var el=getDom(id)||Document;//容错，当取不到元素id，就取document
    if(el.addEventListener){//addEventListener适用于非ie
        el.addEventListener(event,fn,false);
    }else if(el.attachEvent){//attachEvent适用于ie
        el.attachEvent('on'+event,fn);
    }

}

var getElementLeft=function(element){
    var actualLeft=element.offsetLeft;
    var current=element.offsetParent;
    while(current!=null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

var getElementTop=function(element){
    var actualTop=element.offsetTop;
    var current=element.offsetParent;
    while(current!=null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}

var ajaxGet=function(url,callback){
    var _xhr=null;
    if(window.XMLHttpRequest){
        _xhr=new window.XMLHttpRequest();
    }else if(window.ActiveXObject){
        _xhr=new ActiveXObject('Msxml2.XMLHTTP');
    }
    _xhr.onreadystatechange=function(){
        if(_xhr.readyState == 4 && _xhr.status == 200){
            callback(JSON.parse(_xhr.responseText));
        }
    }
    _xhr.open('get',url,false);
    _xhr.send(null);
}

var delegateEvent=function(target,event,fn){
    addEvent(document,event,function(e){
        if(e.target.nodeName == target.toUpperCase()){
            fn.call(e.target);
        }
    })
}

