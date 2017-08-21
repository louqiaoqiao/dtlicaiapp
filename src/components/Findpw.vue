<template>
	<div class="content">
        <!--<div class="back">-->
		<header class="clearfix">
			<div class="top user_top">
		    	<h1>重设密码</h1>
		        <div class="kfyy"><a href="tel:4008826722">400-882-6722</a><!-- <span>09:00-11:30 13:30-16:30</span> --></div>   
		    </div>
		    <br class="clear">
		</header>
		<section class="main">
			<!--手机验证码找回密码-->
            <form class="public_form" id="findpw_form">
	    		<p class="input_text">
	    			<i class="icon iconfont">&#xe705;</i><input type="text" placeholder="请输入手机号"  id="mbmobile" maxlength="11">
	    		</p>
	    		
	    		<p class="input_text sms_verify">
	    			<i class="icon iconfont">&#xe765;</i><input type="text" id="mbcode" placeholder="请输入验证码" maxlength="4">
	    		</p>
	    		<span class="reg-yzm" rel="1" flag="forgetPass">获取验证码</span>
	    		<p>
	    			<span class="submit_btn" id="next_btn">下一步</span>

	    		</p>
	    	</form>
	    	<!--重设密码-->
	    	<form class="public_form" style="display:none;" id="resetpw_form">
	    		<p class="input_text">
	    			<i class="icon iconfont">&#xe73f;</i><input type="password" placeholder="请输入密码" id="password">
	    		</p>
	    		<p class="input_text">
	    			<i class="icon iconfont">&#xe73f;</i><input type="password" placeholder="请确认密码"  id="comfirm_password" >
	    		</p>
	    		
	    		<p>
	    			<span class="submit_btn" id="submit_btn">确  认</span>

	    		</p>
	    		
	    	</form>
       </section>		
    </div>
</template>
<script>

</script>
