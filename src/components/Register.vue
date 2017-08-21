<template>
	<div class="content">
        <header class="clearfix">
			<div class="top user_top">
		    	<h1>东钿金融</h1>
		        <div class="kfyy"><a href="tel:4008826722">400-882-6722</a></div>   
		    </div>
		    <br class="clear">
		</header>
        <form class="reg_form" method="post" >
			<p class="share">欢迎注册东钿互金平台 </p>
            <div class="row">
                <label><i class="icon iconfont">&#xe704;</i>手机号码</label>
                <span class="srcddz"><input type="text"  id="mbmobile" placeholder="输入手机号"></span>
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe73f;</i>登录密码</label>
                <span class="srcddz"><input type="password"  id="userPassword" placeholder="填写密码"></span>
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe73f;</i>确认密码</label>
                <span class="srcddz"><input type="password"  id="reg_re_pw" placeholder="确认密码"></span>
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe7b7;</i>图片验证</label>
                <span class="srcddz smscode"><input type="text"  id="verify" placeholder="图片验证"> <img src="{:captcha_src()}" onclick="this.src='{:captcha_src()}'" id="regverifyimg" /></span>
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe765;</i>短信验证</label>
                <span class="srcddz smscode"><input type="text"  id="bindVerify" placeholder="短信验证"><a href="javascript:;" class="sendcode reg-yzm" flag="register" rel="1">获取验证码</a></span>  
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe7eb;</i>推广码</label>
                <span class="srcddz"><input type="text"  id="dcaddress" placeholder="推广码"></span>
            </div>
            <p class="p_btn"><span class="submit" id="regsubmit">确认注册</span></p>     
        </form>
             
    </div>
</template>
<script>

</script>
