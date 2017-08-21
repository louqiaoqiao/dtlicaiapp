<template>
	<div class="content">
		<header class="clearfix">
			<div class="top user_top">
		    	<h1>个人账户</h1>
		        <div class="kfyy"><a href="tel:4008826722">400-882-6722</a><!-- <span>09:00-11:30 13:30-16:30</span> --></div>   
		    </div>
		    <br class="clear">
		</header>
	    <div class="earnings">
	    	<p>累计收益(元)<span>{{realIncomeSum}}</span></p>
	    	<p>预期累计收益(元)<span>{{incomeSum}}</span></p>
	    </div>
	    <div class="account">
	    	<p>
	    		<span>总额<em>{{totalAmount}}元</em></span>
	    		<span class="right">可用余额<em>{{availableAmount}}元</em></span>
	    	</p>
	    	<p>
	    		<span>投资资金<em>{{investmentAmount}}元</em></span>
	    		<span class="right">冻结资金<em>{{lockAmount}}元</em></span>
	    	</p>
	    </div>
		<p class="user_opt">
		 	<router-link to="/product" class="external">我要理财</router-link>
		 	<router-link to="/holding" class="btn_lcjl external">持有理财</router-link>
		</p>      
	</div>
</template>
<script>
	export default {
		name:'userinfo',
		data(){
			return{
				realIncomeSum:'',
				incomeSum:'',
				totalAmount:'',
				availableAmount:'',
				investmentAmount:'',
				lockAmount:'',
				
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
				this.$router.push('/'); 
				
			},
			getItems(){           //localStorage取值
	        	var data = JSON.parse(localStorage.getItem('userinfo'));
	        	this.realIncomeSum = data.realIncomeSum; //累计收益(元)
        		this.incomeSum  = data.incomeSum;//预期累计收益(元)
        		this.totalAmount = data.totalAmount;//总额
		        this.availableAmount = data.availableAmount;//可用余额
		        this.investmentAmount = data.investmentAmount;//投资资金
		        this.lockAmount = data.lockAmount;  //冻结资金	
	    	},
				

		}
	}
</script>
