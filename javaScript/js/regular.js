/**
 * Created by admin on 2016/8/31.
 */
    function getLength(str){
        var db=/[^\x00-xff]/g;//双字节字符包含汉字
        return str.replace(db,'xx').length;

    }

    function findStr(str,n){
        var temp=0;
        for(var i=0;i<str.length;i++){
            if(str.charAt(i)==n){
                temp++;
            }
        }
        return temp;
    }

    window.onload=function(){
        var input = document.getElementsByTagName("input");
        var userName=input[0];
        var pwd=input[1];
        var pwd2=input[2];
        var code=input[3];
        var p=document.getElementsByTagName("p");
        var nameMsg=p[0];
        var paMsg=p[1];
        var pa2Msg=p[2];
        var aem=document.getElementsByTagName("em");
        var count=document.getElementById("count");
        var sub=document.getElementById("sub");
        var name_length=0;

        //1.用户名：数字，字母（不分大小写），汉字，下划线；5-25字符，推荐使用中文
        //\u4e00-\u9fa5表示汉字

        userName.onfocus=function(){
            nameMsg.style.display="block"
            nameMsg.innerHTML='<i class="ati"></i>5-25个字符，一个汉字为两个字符，推荐使用中文会员名';
        }

        userName.onkeyup=function(){
            count.style.display="block";
            name_length=getLength(this.value);
            count.innerHTML=name_length+"个字符";
            if(name_length==0){
                count.style.display="none";
            }
        }

        userName.onblur=function(){
            //含有非法字符
            var regName=/[^\w\u4e00-\u9fa5_]/gi;
            if(regName.test(this.value)){
                nameMsg.innerHTML='<i class="err"></i>含有非法字符';
            }

            //不能为空
            else if(this.value==""){
                nameMsg.innerHTML='<i class="err"></i>不能为空';
            }

            //长度不超过25个字符
            else if(name_length>25){
                nameMsg.innerHTML='<i class="err"></i>不超过25个字符';
            }
            //长度不少于6个字符
            else if(name_length<6){
                nameMsg.innerHTML='<i class="err"></i>不少于6个字符';
            }
            else{
                nameMsg.innerHTML='<i class="right"></i>ok';
            }
        }

        //2.密码：
        pwd.onfocus=function(){
            paMsg.style.display="block";
            paMsg.innerHTML='<i class="ati"></i>6-16个字符，请使用字母加数字或符号的组合';
        }

        pwd.onkeyup=function(){
            //大于5个字符为“中”
            if(this.value.length>5){
                aem[1].className="active";
                pwd2.removeAttribute("disabled");
                pa2Msg.style.display="block";
            }else{
                aem[1].className="";
                pwd2.setAttribute("disabled","");
                pa2Msg.style.display="none";
            }
            //大于10个字符为“高”
           if(this.value.length>10){
                aem[2].className="active";
           }else{
               aem[2].className="";
           }
        }

        pwd.onblur=function(){
            var m = findStr(pwd.value,pwd.value[0]);
            var reNum=/\d/g;
            var reNum2=/[^a-zA-Z]/g;
            //不能为空
            if(this.value==""){
                paMsg.innerHTML='<i class="ati"></i>不能为空';
            }
            //不能用相同字符
            else if(m==this.value.length){
                paMsg.innerHTML='<i class="ati"></i>不能用相同字符';
            }

            //长度为6-16个字符
            else if(this.value.length<6||this.value.length>16){
                paMsg.innerHTML='<i class="ati"></i>c长度应为6-16个字符';
            }
            //不能全为数字
            else if(reNum.test(this.value)){
                paMsg.innerHTML='<i class="ati"></i>不能全为数字';
            }
            //不能全为字母
            else if(!reNum2.test(this.value)){
                paMsg.innerHTML='<i class="ati"></i>不能全为字母';
            }
            //ok
            else{
                paMsg.innerHTML='<i class="right"></i>ok';
            }
        }

        //3.确认密码
        pwd2.onblur=function(){
            if(this.value!=pwd.value){
                pa2Msg.innerHTML='<i class="ati"></i>两次输入不一致';
            }else{
                pa2Msg.innerHTML='<i class="right"></i>ok';
            }
        }
    }


