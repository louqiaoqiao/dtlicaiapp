<template>
	<div class="content">
		<header class="clearfix">
        	<div class="top user_top">
		    	<h1>用户登录</h1>
		        <div class="kfyy"><a href="tel:4008826722">400-882-6722</a><!-- <span>09:00-11:30 13:30-16:30</span> --></div>   
		    </div>
    		<br class="clear">
            <nav>
                <span v-bind:class="{ cur: iscur }" v-on:click="tab()"><i>....</i>用户名密码登录<b class="arrow-up"></b></span>
                <span class="tabnav" v-bind:class="{ cur: !iscur }" v-on:click="tab()"><i>....</i>手机验证码登录<b class="arrow-up"></b></span>  
            </nav>
        </header>
		<section class="main">
        	<!--手机号密码登录-->
        	<form class="public_form" >
        		<div v-if="iscur">
		    		<p class="input_text">
		    			<i class="icon iconfont">&#xe705;</i><input v-model="telphone" type="tel"  placeholder='请输入手机号码'>	
		    		</p>
		    		
		    		<p class="input_text">
		    			<i class="icon iconfont">&#xe73f;</i><input v-model="passw" type="password"  placeholder='请输入密码'>
		    		</p>
		    		<p>
		    			<x-button @click.native="pw_login()" type="delete" class="submit_btn">登  录</x-button>
		    		</p>
		    		
	    		</div>
	    		<!--手机号验证码登录-->
	    		<div v-else="iscur">
	    			<p class="input_text">
		    			<i class="icon iconfont">&#xe705;</i><input type="tel" placeholder="请输入手机号" v-model="mbmobile" >
		    		</p>
		    		<p class="input_text sms_verify">
		    			<i class="icon iconfont">&#xe765;</i><input type="text" placeholder="请输入验证码" v-model="mbcode">
		    		</p>
		    		<span class="reg-yzm reg-disable" v-if='start'>剩余<countdown slot="value" v-model="time" :start="start" @on-finish="finish2"></countdown>S</span>
		    		<x-button @click.native="send_code()" class="reg-yzm" v-else='start'><span v-if='resend'>重新获取</span><span v-else='resend'>获取验证码</span></x-button>
		    		<p>
						 <x-button @click.native="code_login()" type="delete" class="submit_btn">登  录</x-button>
		    		</p>
	    		</div>
	    		<p class="clearfix">没有账号?
	    			<router-link to="/register">马上注册</router-link>
	    			<router-link to="/findpw" class="findpw">忘记密码？找回密码&gt;</router-link>
	    		</p>
	    	</form>
      </section>
    </div>
    
</template>
<script>
import Vue from 'vue'
//导入显示提示信息的组件
import  { ToastPlugin,XButton,Countdown } from 'vux'
Vue.use(ToastPlugin)

export default {
	name:'login',
	components: {
        //登录提示信息
          ToastPlugin,
          XButton,
          Countdown
      },
	data(){
		return {
			iscur:true,
			telphone:'',//电话号码
            passw:'',//首次输入密码
            mbmobile:'',//手机号码 ，为了区分第一个手机号所以另取了一个名字
            mbcode:'',//手机验证码
	        position: 'default',
	        showPositionValue: false,
	        resend:false,
	        time:60, //设置倒计时初始时间
	        start: false,
	        isLoging: false,
	        pw_login_url:'http://demo.dongtianjr.com/public/index.php/test/register/login',
	        code_login_url:'http://demo.dongtianjr.com/public/index.php/test/register/codeLogin',
	        send_code_url:'http://demo.dongtianjr.com/public/index.php/test/register/sendCode'
           
		}
	},
    created: function(){
    	
	  		
	  	   var islogin = localStorage.getItem('userinfo');
	  	   if(islogin){
	  	   	
	  	   	this.$vux.toast.text('您已登录', 'top');
			this.$router.push('/userinfo');
	   
	  	   }else{
	  	   	 this.deleteItem();
	  	   }
	  	   
	  		
	   
		
    },
	methods:{
		tab (){
			this.iscur =! this.iscur;
		},
		    
       	pw_login (){  //用户名密码提交登录
            
            var telephones = this.telphone;
            var pw = this.passw;
            if(telephones==""){
				this.$vux.toast.text('请填写手机号码', 'middle');
            	return false;
            }else if(/^1[3|4|5|7|8][0-9]{9}$/.test(telephones)==false){
            	
            	this.$vux.toast.text('手机号格式不正确', 'middle');
            	return false;
            }else if(pw==""){
				
				this.$vux.toast.text('请填写密码！', 'middle');
				return false;
			}else{
				
			    this.$http.post(this.pw_login_url,{mobilePhone: this.telphone,
		  			password:this.passw}).then(function(response){
		  			
				    // 响应成功回调
					 if(response.data.status == "1"){
					   this.login(response);
			        }else{
			        	this.$vux.toast.text(response.data.msg, 'middle');
			        }
				  
				}, function(response){
					
				    // 响应错误回调
				    this.$vux.toast.text("连接失败！", 'middle');
				    
				    
				})
	            	
	       }   
            
        },
        send_code (){ //发送验证码方法
        	var mbmobile = this.mbmobile;
        	var flag ="codeLogin";
        	 if(mbmobile==""){
				this.$vux.toast.text('请填写手机号码', 'middle');
            	return false;
            }else if(/^1[3|4|5|7|8][0-9]{9}$/.test(mbmobile)==false){
            	
            	this.$vux.toast.text('手机号格式不正确', 'middle');
            	return false;
            }else{
            	this.$http.post(this.send_code_url,{mobilePhone:this.mbmobile,flag:flag}).then(function(response){
				    // 响应成功回调
					 if(response.data.status == "1"){
			          
			          this.$vux.toast.show({text: '发送成功'});
			          this.start = true;
			          
			        }else{
			        	this.$vux.toast.text(response.data.msg, 'middle');
			        }
				  
				}, function(response){
					
				    // 响应错误回调
				    this.$vux.toast.text("连接失败！", 'middle');
				    
				    
				})   	
            	
            }
        },
        code_login (){  //手机号验证码登录提交
        	var mbmobile = this.mbmobile;
            var mbcode = this.mbcode;
            if(mbmobile==""){
				this.$vux.toast.text('请填写手机号码', 'middle');
            	return false;
            }else if(/^1[3|4|5|7|8][0-9]{9}$/.test(mbmobile)==false){
            	
            	this.$vux.toast.text('手机号格式不正确', 'middle');
            	return false;
            }else if(mbcode==""){
				
				this.$vux.toast.text('请填写验证码！', 'middle');
				return false;
			}else if(/^\d{4}$/.test(mbcode)==false){
				
				this.$vux.toast.text('验证码格式不正确', 'middle');
				return false;
			}else{
				this.$http.post(this.code_login_url,{mobilePhone:this.mbmobile,verify:mbcode}).then(function(response){
				    // 响应成功回调
					 if(response.data.status == "1"){
			            this.login(response);
			          
			        }else{
			        	this.$vux.toast.text(response.data.msg, 'middle');
			        }
				  
				}, function(response){
					
				    // 响应错误回调
				    this.$vux.toast.text("连接失败！", 'middle');
				    
				    
				})
	            	
	        }
       },
       
       finish2 (index) {  //倒计时完成之后的方法
	      this.start = false; //倒计时启动开关
	      this.time = 60; //重设时间
	      this.resend = true; //重新获取验证码
	    },
	    
       setItems (wxNickname,realName,sex,birthday,mobilePhone,createTime,realIncomeSum,incomeSum,totalAmount,availableAmount,investmentAmount,lockAmount){  //localStorage存值永久有效
	        var user = {};
	        user.wxNickname = wxNickname;//用户微信昵称
	        user.realName  = realName;//用户真实名字
	        user.sex = sex;//用户性别
	        user.birthday = birthday;//用户生日
	        user.mobilePhone  = mobilePhone;//用户手机号
	        user.createTime = createTime;//用户创建时间
	        user.realIncomeSum = realIncomeSum; //累计收益(元)
	        user.incomeSum  = incomeSum;//预期累计收益(元)
	        user.totalAmount = totalAmount;//总额
	        user.availableAmount = availableAmount;//可用余额
	        user.investmentAmount = investmentAmount;//投资资金
	        user.lockAmount = lockAmount;  //冻结资金
        
        	localStorage.setItem('userinfo',JSON.stringify(user));
    	}, 
       deleteItem () { //localStorage删除指定键对应的值
	        localStorage.removeItem('userinfo');
	        
	    },	
	   login(response){ //登录方法
	   	   var userinfo = response.data.userInfo;
	       var totalInvestment = response.data.totalInvestment
	       var wxNickname = userinfo.wxNickname;//用户微信昵称
	       var realName = userinfo.realName;//用户真实名字
	       var sex = userinfo.sex;//用户性别
	       var birthday = userinfo.birthday;//用户生日
	       var mobilePhone = userinfo.mobilePhone;//用户手机号
	       var createTime = userinfo.createTime;//用户创建时间
	       var realIncomeSum = totalInvestment.realIncomeSum;//累计收益(元)
	       var incomeSum = totalInvestment.incomeSum;//预期累计收益(元)
	       var totalAmount = userinfo.totalAmount;//总额
	       var availableAmount = userinfo.availableAmount; //可用金额
	       var investmentAmount = userinfo.investmentAmount;//投资资金
	       var lockAmount = userinfo.lockAmount;//冻结资金
	       this.setItems(wxNickname,realName,sex,birthday,mobilePhone,createTime,realIncomeSum,incomeSum,totalAmount,availableAmount,investmentAmount,lockAmount);
	       this.$vux.toast.show({text: '登陆成功'});
	       //登录成功后
	       this.$router.push('/product'); 
	   }
        
	    
	}	

}
</script>

