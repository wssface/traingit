/**
 * Created by admin on 2016/9/21.
 */
'use strict';

var loadImage = require('./imgloader');
//初始化状态 常量可以用大写表示，更容易看懂代码
var STATE_INITIAL=0;
//开始状态
var STATE_START=1;
//停止状态
var STATE_STOP=2;
//同步任务
var TASK_SUNC = 0;
//异步任务
var TASK_ASYNC = 1;
/*
* 帧动画库类
* */
function Animation(){
    this.taskQueue=[];
    this.index=0;
    this.state=STATE_INITIAL;
}

/**
 * 添加一个同步任务，去预加载图片
 * @param imglist 图片数组
 * **/
Animation.prototype.loadImage=function(imglist){
    var taskFn = function(next){
        loadImage(imglist.slice(),next);
    };
    var type = TASK_SUNC;
    return this._add(taskFn,type);
};

/**
 * 添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
 * @param ele dom对象
 * @param positions 背景位置数组
 * @param imgUrl 图片地址
 * **/
Animation.prototype.changePosition=function(ele,positions,imgUrl){

};

/**
 * 添加一个异步定时任务，通过定时改变img的src属性，实现帧动画
 * @param ele dom对象
 * @param imglist 图片数组
 * **/
Animation.prototype.changeSrc=function(ele,imglist){

};

/**
 * 高级用法，添加一个异步定时执行任务
 * 该任务自定义动画每帧执行的任务函数
 * @param taskFn 自定义动画每帧执行的任务函数
 * **/
Animation.prototype.enterFrame=function(taskFn){

};

/**
 * 添加一个同步任务，可以在上一个任务完成后执行回调函数
 * @param callback 回调函数
 * **/
Animation.prototype.then=function(callback){

};

/**
 * 开始执行任务 异步定时任务执行的间隔
 * @param callback 回调函数
 * **/
Animation.prototype.start=function(interval){

};


/**
 * 添加一个同步任务，该任务是回退到上一个任务中
 * 实现重复上一个任务的效果，可以定义重复的次数
 * @param times 重复的次数
 * **/
Animation.prototype.repeat=function(times){

};

/**
 * 添加一个同步任务，相当于repeat（）更友好的接口，无限重复上一次任务
 * **/
Animation.prototype.repeatForever=function(){

};

/**
 * 设置当前任务执行结束后到下一个任务开始前的等待时间
 * @param time 等待时间
 * **/
Animation.prototype.wait=function(time){

};

/**
 * 暂停当前异步定时任务
 * **/
Animation.prototype.pause=function(){

};

/**
 * 重复执行上一次暂停的异步任务
 * **/
Animation.prototype.restart=function(){

};

/**
 * 释放资源
 * **/
Animation.prototype.dispose=function(){

};

/**
 * 加下划线，内部使用的方法
 * 添加一个任务到任务队列中
 * @param taskFn 任务方法
 * @param type 任务类型
 * **/
Animation.prototype._add=function(taskFn,type){
    this.taskQueue.push({
        taskFn: taskFn,
        type: type
    });
    return this;
};

