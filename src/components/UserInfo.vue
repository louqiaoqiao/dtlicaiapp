<template>
	<div class="content">
			<header class="clearfix">
				<div class="top user_top">
			    	<h1>个人信息</h1>
			        <div class="kfyy"><a href="tel:4008826722">400-882-6722</a><!-- <span>09:00-11:30 13:30-16:30</span> --></div>   
			    </div>
			    <br class="clear">
			</header>
		    <div class="usercenter">
		   		<h2 class="tit">我的信息</h2>
				<form method="post" class="user_form" id="userform" action="#">
					<div class="usename">
						<span>微信昵称</span>
						<span>{{wxNickname}}</span>
						<!--<img src="{$userInfo.headimgurl}"/>-->
					</div>
					<div>
						<span>姓  名</span>
						<span v-if="isRealName">{{realName}}</span>
						<router-link to="/realname" v-else="isRealName">点此实名</router-link>
					</div>
					<div>	
						<span>性  别</span>
						
						<span v-if="isRealName">{{sex}}</span>
						<router-link to="/realname" v-else="isRealName===null">点此实名</router-link>
							
					</div>
					<div>
						<span>生  日</span>
						<span v-if="isRealName">{{birthday}}</span>
						<router-link to="/realname" v-else="isRealName">点此实名</router-link>
					</div>
					<div>
						<span>手  机</span>
						<span>{{mobilePhone}}</span>
					</div>
					 <p class="user_opt">
			 			<a href="javascript:;" style="background:#0894ec" v-on:click="exit()">退出登录</a>
			 			
					 	<router-link to="/product" style="margin-left:4%" class="external">我要理财</router-link>
						
					 </p>
				</form>
				<div class="mypoint">
					<p>注册日期：{{createTime}}</p>
				</div>
		</div> 
	</div>
</template>
<script>
	export default {
		name:'userinfo',
		data(){
			return{
				wxNickname:'',
				realName:'',
				sex:'',
				birthday:'',
				mobilePhone:'',
				createTime:'',
				isRealName:false
			}
		},
		created: function () {
	  	   var islogin = localStorage.getItem('userinfo');
	  	   if(islogin){
	  	   	this.getItems();
	   
	  	   }else{
	  	   	 this.$router.push('/login');
	  	   }
	       
		},
		methods:{
			exit(){
				
				this.deleteItem ();
				this.$router.push('/')
			},
			getItems(){           //localStorage取值
	        	var data = JSON.parse(localStorage.getItem('userinfo'));
	        	this.wxNickname = data.wxNickname;
	  			this.mobilePhone = data.mobilePhone;
	  			this.createTime = data.createTime;
	  			
	  			if(data.realName === null){ //判断是否实名制
	  				this.isRealName = false;
	  				
	  			}else{
	  				this.isRealName = true;
	  				this.realName = data.realName;
	  				this.birthday = data.birthday;
	  			}
	  			
	  			if(data.sex==0){  //性别转换
	  				this.sex = "女";
	  			}else if(data.sex==1){
	  				this.sex = "男";
	  			}else{
	  				this.sex = "未知";
	  			}
	        	
	    	},
	    	deleteItem () { //localStorage删除指定键对应的值
	        localStorage.removeItem('userinfo');
	        
	   		}		

		}
	}
</script>
