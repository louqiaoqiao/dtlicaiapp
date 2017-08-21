<template>
	<div class="content">
		<header class="clearfix">
			<div class="top user_top">
		    	<h1>理财记录</h1>
		        <div class="kfyy"><a href="tel:4008826722">400-882-6722</a><!-- <span>09:00-11:30 13:30-16:30</span> --></div>   
		    </div>
		    <br class="clear">
		</header>
	     <tab active-color="#c8161e">
	      <tab-item selected @on-item-click="onItemClick">预约中</tab-item>
	      <tab-item @on-item-click="onItemClick">持有中</tab-item>
	      <tab-item @on-item-click="onItemClick">已完成</tab-item>
	    </tab>
	    <!--预约中-->
		<div class="orderlist">
		    <div class="row" style="text-align:center;font-size:1em;color:#cccccc" v-if="sum==0">没有相关订单</div>
			<div class="box2" v-if="index===0 && sum!=0">
				<div class="order_row" v-for="item in items">
					<p>
						<span class="orderpro">{{item.productName}}-{{item.productNo}}</span>
						<!--<span class="right">预约总数<em>{$bookingSum}</em></span>-->
					</p>
					<p class="ordermsg">
						<span>理财期限：<em>{{item.closeTime}}天</em></span>
						
						<span class="right" style="flex:2">预约结束:
				
						{{item.bookingEndDate}}(剩<em>{{item.surplus}}</em>天)
						</span>
					</p>
					<p class="ordermsg">
						<span>预约金额：<em>{{item.bookingAmount}}万元</em></span>
						
						<span class="right">预约到期:{{item.bookingEndDate}}</span>
						<input type="hidden" value="1111" class="prostatus"/>
					</p>
				</div>
			</div>
			<!--持有中-->
			<div class="box2" v-else-if="index===1 && sum!=0">
				<div class="order_row" v-for="item in items">
				
					<p>
						<span class="orderpro" style="flex:2">{{item.productName}}-{{item.productNo}}</span>
					
					</p>
					<p class="ordermsg" style="border-bottom:.05rem solid #f3f3f3;padding-bottom:.5rem;">
					<span>截止到 {{item.cutOffDate}}</span>
					<span class="right"><em>预期总收益：￥{{item.investmentTotalIncome}}元</em></span>
					</p>
					<p class="ordermsg">
						<span>当前预期年化收益率：</span>
						<span class="right"><em>{{item.annuaiRate}}%</em></span>
					</p>
					<p class="ordermsg">
						<span>理财期限：{{item.closeTime}}天</span>
						<span class="right" style="flex:2">到期：{{item.endDate}}
						
						(剩{{item.surplus}}天)
						
						</span>
					</p>
					<p class="proopt">
						 <span class="start_num">投资金额：<em>{{item.investmentAmount}}万元</em></span>
						 <!--<span class="yy_btn btn_investdetail">投资明细</span>-->
						 
					</p>
				</div>
			</div>
			<!--已完成-->
			<div class="box2" v-else-if="index===2 && sum!=0">
				<div class="order_row" v-for="item in items">
					<p>
						<span class="orderpro">{{item.productName}}-{{item.productNo}}</span>
						
					</p>
					<p class="ordermsg" style="border-bottom:.05rem solid #dcdcdc;padding-bottom:.5rem;">
	
					<span>总收益：<em>￥{{item.investmentTotalIncome}}元 </em></span>
					<span class="right">年化收益率：<em>{{item.annuaiRate}}%</em></span>
					</p>
					<p class="ordermsg">
						<span>投资金额：<em>{{item.investmentAmount}}万元</em></span>
						<span class="right">理财期限：{{item.closeTime}}天</span>
						
					</p>
					<p class="ordermsg">
						
						<span>完成时间：{{item.endDate}}</span>
						<span class="right"><em>已退出</em></span>
					</p>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
export default {
  name: 'product',
  data () {
    return {
      items: [],
	  bookUrl: 'http://demo.dongtianjr.com/public/index.php/test/user/booking',
	  holdUrl: 'http://demo.dongtianjr.com/public/index.php/test/user/holding',
	  endUrl: 'http://demo.dongtianjr.com/public/index.php/test/user/holdinghistory',
      sum:0,
      index:0
	    
    }
  },
  
  created: function () {
	    //this.getCustomers()
	    this.getbook(); //获取php数据 默认获取预约中的数据
	   
  },
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },

	methods:{
		
		
		getbook() {
			var useinfo = JSON.parse(localStorage.getItem('userinfo'));
			var mobilePhone = useinfo.mobilePhone;
			
			this.$http.post(this.bookUrl,{mobilePhone:mobilePhone}).then(function(response){
				
				 if(response.data.isLogin!="1"){
				 	
				 	this.$router.push('/login');
				 }else if(response.data.bookingSum==0){
				 	this.sum = 0;
				 }
				 else{
				 	this.items = response.data.booking;
				 	this.sum = response.data.bookingSum;
				 }
				  
				
			    // 响应成功回调
			}, function(response){
				
			    // 响应错误回调
				this.$vux.toast.text("连接失败！", 'middle');
			})
		},
		gethold() {
			var useinfo = JSON.parse(localStorage.getItem('userinfo'));
			var mobilePhone = useinfo.mobilePhone;
			
			this.$http.post(this.holdUrl,{mobilePhone:mobilePhone}).then(function(response){
				
				 if(response.data.isLogin!="1"){
				 	
				 	this.$router.push('/login');
				 }else if(response.data.holdingSum==0){
				 	this.sum = 0;
				 }
				 else{
				 	this.items = response.data.holding;
				 	this.sum = response.data.holdingSum;
				 }
				  
				
			    // 响应成功回调
			}, function(response){
				
			    // 响应错误回调
				this.$vux.toast.text("连接失败！", 'middle');
			})
		},
		getend() {
			var useinfo = JSON.parse(localStorage.getItem('userinfo'));
			var mobilePhone = useinfo.mobilePhone;
			
			this.$http.post(this.endUrl,{mobilePhone:mobilePhone}).then(function(response){
				
				 if(response.data.isLogin!="1"){
				 	
				 	this.$router.push('/login');
				 }else if(response.data.holdingSum==0){
				 	this.sum = 0;
				 }
				 else{
				 	this.items = response.data.holding;
				 	this.sum = response.data.holdingSum;
				 }
				  
				
			    // 响应成功回调
			}, function(response){
				
			    // 响应错误回调
				this.$vux.toast.text("连接失败！", 'middle');
			})
		},
		onItemClick (index) {
	      this.index = index;
	      if(index==0){
	      	this.getbook();
	      }else if(index==1){
	      	this.gethold();
	      }else{
	      	this.getend();
	      }
	    }
			 
    
    
		
  }
}
</script>

<style>
	.vux-tab .vux-tab-item.vux-tab-selected{color:#c8161e}
</style>