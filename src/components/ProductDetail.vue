<template>
  <div class="content">
  	<header class="clearfix">
          <div class="top user_top">
              <h1 style="border-right:none">sangfor-sang_001</h1>
                <!-- <div class="kfyy"><a href="tel:4008826722">400-882-6722</a><span>09:00-11:30 13:30-16:30</span></div>  -->  
            </div>
            <br class="clear">
    </header>
			<div class="prodetail">
			    	<p class="detail_moeny">
			    		<span>余额：<em class="num">0.0元</em></span>
			    		<span class="startmoney">起投金额：<em class="num">10000元</em></span>
			    	</p>
			    	<div class="yymoeny">
                   
            <p>
              <span class="f14tit">剩余金额：</span>
              <em class="num">0.00万元</em>
            </p>
            <p class="money_num"><span>￥</span>
              <input type="text"  class="num_input" id="inputmoney" placeholder="在此输入金额" v-model="bookingAmount" v-on:keyup="chinaMoney()">
              <input type="hidden"  id="bookingAmount"  >
            </p>
            <p class="china_money" id="china_money">
              <span>大写金额：<em class="num">{{newchar}}</em></span>
            </p> 
		    			<p class="detail_msg">
		    				<span>封闭期：<em class="num">6天</em></span>
		    				<span class="surplus_money" style="flex:2">预约截止日期：2017-06-19</span>
		    			</p>
							<input type="hidden" value="111" id="productId" name="productId">
							<input type="hidden" name="__token__" value="11" />
			    	</div>
           
            <p class="proopt"><span class="detail_btn" v-on:click="booking()">立 即 预 约</span></p>
            
			    </div>
			    <div class="prodes">
			    	<p class="des_nav">
			    		<span v-for="(item,index) in itmes" v-on:click="tab(index)" :class="{cur:cur_index==index}">{{item.text}}</span>
			    	</p>
			    	<div class="des_cont" v-if="cur_index===0">
			    		111
			    	</div>
			    	<div class="des_cont" v-if="cur_index===1">
			    			<p class="active">东钿平台的投资原理</p>
		            <div class="yxdq-tzyl">
			              <p>东钿的审核团队通过身份及经营信息核对，远程电话照会，现场净值调查，负面信息查询以及信用评分系统评估等手段对借款人
			进行信用审查，慎重决定借款人的贷款结果以及贷款金额，将风险拒之门外。</p>
			              <p>下方是东钿平台投资原理说明示例：</p>
	          			  <img alt="" src="../assets/images/yxdq-pro-infos.png">
	        			</div>
			    	</div>
			    	<div class="des_cont" v-if="cur_index===2">
			    		 <p class="active">1. 东钿是一家什么网站?</p>
			         <p>区别于传统的P2P模式，我们是一家创新的互联网金融服务平台，为投资者提供一站式全方位的贴心管家服务，您无需关注过多细节即可坐享可观收益。平台以安全透明的投资产品与专业稳健的风险管控体系为基础，业务涵括个人与企业财富管理、投融资信息咨询、信用风险管控等，致力于提升投资者核心价值，完善资产配置，最优化收益，为客户提供安全、专业、高效、值得信赖的一站式金融服务。</p>
			         <p class="active">2. 在东钿投资有什么门槛？</p>
			         <p>只要您年满18周岁，拥有一张开通网银功能的银行卡，并有 1000 元以上投资资金就可以在东钿投资理财了。 首先在网站上进行注册，之后完成实名认证、邮箱验证、手机验证；再用网银通过第三方支付充值要投资的金额，最后选择项目投资就可以坐收投资理财收益了。</p>
			         <p class="active">3. 投资详情在哪里可以看到？</p>
			         <p>登录进入我的账户页面即可查看投资详情。</p>
			         <p class="active">4. 电子合同是不是有法律效应？</p>
			         <p>您好，根据《合同法》和《电子商务示范法》，在您点下投资按钮的时候就真实明确表达了您的投资意愿，所以从网站上下载的合同具有法律效应，如果不放心，您也可以来公司加盖鲜章。</p>
			         <p class="active">5.富友支付安全吗？</p>
			         <p>富友是一家通过中国国家信息安全测评认证中心安全认证的第三方支付平台，且有多重安全保护：数字证书、双密码保护、中介保护交易、资金变动通知、密码安全控件。</p>
			    	</div>
			    </div>
  </div>
</template>

<script>
export default {
  name:'productdetail',
  data(){
  	return{
  		cur_index:0,
  		itmes:[
	  		{text:'产品详情'},
	  		{text:'产品原理'},
	  		{text:'常见问题'}
  		],
  		bookingAmount:'',
  		newchar:'零元整'
  	}
  },
  computed:{
  	
  },
  methods:{
  	 tab(index){ 
			this.cur_index = index; //tab切换
		 },
		 booking(){
		 	var bookingAmount = this.bookingAmount;
		 	var vos = /^[0-9]+.?[0-9]*$/;
		 	if(!vos.test(bookingAmount)){
				this.$vux.toast.text('请输入预约金额', 'middle');
        return false;
			}else if(bookingAmount%10000!=0){
        this.$vux.toast.text('请输入整万元', 'middle');
        return false;
      }
		 },
		 chinaMoney(){ //转换成中文大写金额
  		var value = this.bookingAmount;
  		if(value==""||value==0) {  
          //输入框删减为空时，将大写金额的内容值设为原始状态，当然也可以根据需求进行修改  
          //return '零元整'; 
          return this.newchar='零元整';
      } 
      var part = String(value).split(".");  
      var newchar = "";  
        for(var i=part[0].length-1;i>=0;i--){  
            if(part[0].length > 10){  
                this.$vux.toast.text("位数过大，无法计算",'middle');//前面如果有验证位数的，此处判断可去掉  
                return false;  
            }  
            tmpnewchar = ""  
            perchar = part[0].charAt(i);  
            switch(perchar){  
                case "0": tmpnewchar="零" + tmpnewchar ;break;  
                case "1": tmpnewchar="壹" + tmpnewchar ;break;  
                case "2": tmpnewchar="贰" + tmpnewchar ;break;  
                case "3": tmpnewchar="叁" + tmpnewchar ;break;  
                case "4": tmpnewchar="肆" + tmpnewchar ;break;  
                case "5": tmpnewchar="伍" + tmpnewchar ;break;  
                case "6": tmpnewchar="陆" + tmpnewchar ;break;  
                case "7": tmpnewchar="柒" + tmpnewchar ;break;  
                case "8": tmpnewchar="捌" + tmpnewchar ;break;  
                case "9": tmpnewchar="玖" + tmpnewchar ;break;  
            }  
            switch(part[0].length-i-1){  
                case 0: tmpnewchar = tmpnewchar +"元" ;break;  
                case 1: if(perchar!=0)tmpnewchar= tmpnewchar +"拾" ;break;  
                case 2: if(perchar!=0)tmpnewchar= tmpnewchar +"佰" ;break;  
                case 3: if(perchar!=0)tmpnewchar= tmpnewchar +"仟" ;break;  
                case 4: tmpnewchar= tmpnewchar +"万" ;break;  
                case 5: if(perchar!=0)tmpnewchar= tmpnewchar +"拾" ;break;  
                case 6: if(perchar!=0)tmpnewchar= tmpnewchar +"佰" ;break;  
                case 7: if(perchar!=0)tmpnewchar= tmpnewchar +"仟" ;break;  
                case 8: tmpnewchar= tmpnewchar +"亿" ;break;  
                case 9: tmpnewchar= tmpnewchar +"拾" ;break;  
            }  
            newchar = tmpnewchar + newchar;  
        }  
        if(value.indexOf(".")!=-1){  
            if(part[1].length > 2) {  
                part[1] = part[1].substr(0,2)  
            }  
            for(i=0;i<part[1].length;i++){  
                var tmpnewchar = ""  
                var perchar = part[1].charAt(i)  
                switch(perchar){  
                    case "0": tmpnewchar="零" + tmpnewchar ;break;  
                    case "1": tmpnewchar="壹" + tmpnewchar ;break;  
                    case "2": tmpnewchar="贰" + tmpnewchar ;break;  
                    case "3": tmpnewchar="叁" + tmpnewchar ;break;  
                    case "4": tmpnewchar="肆" + tmpnewchar ;break;  
                    case "5": tmpnewchar="伍" + tmpnewchar ;break;  
                    case "6": tmpnewchar="陆" + tmpnewchar ;break;  
                    case "7": tmpnewchar="柒" + tmpnewchar ;break;  
                    case "8": tmpnewchar="捌" + tmpnewchar ;break;  
                    case "9": tmpnewchar="玖" + tmpnewchar ;break;  
                }  
                //if(i==0)tmpnewchar =tmpnewchar + "角";  
                //if(i==1)tmpnewchar = tmpnewchar + "分";  
                newchar = newchar + tmpnewchar;  
            }  
        }  
        while(newchar.search("零元") != -1){  
            newchar = newchar.replace("零零", "零");  
            newchar = newchar.replace("零亿", "亿");  
            newchar = newchar.replace("亿万", "亿");  
            newchar = newchar.replace("零万", "万");  
            newchar = newchar.replace("零元", "元");  
            newchar = newchar.replace("零角", "");  
            newchar = newchar.replace("零分", "");  
        }  
        if(newchar.charAt(newchar.length-1) == "元" || newchar.charAt(newchar.length-1) == "角"){  
            newchar = newchar;  
        }
        return this.newchar = newchar;
  	}

  }
  
}
</script>

