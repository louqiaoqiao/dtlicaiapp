<template>
	<div class="footer">
		
	      	<router-link to="/"><i class="icon iconfont">&#xe6b8;</i><span>首页</span></router-link>
	      
	     
	      	<router-link to="/product"><i class="icon iconfont">&#xe706;</i><span>产品</span></router-link>
	      
	      
	      	<router-link to="/order"><i class="icon iconfont">&#xe7f3;</i><span>理财</span></router-link>
	     
	     
	      	<router-link to="/userinfo"><i class="icon iconfont">&#xe7d5;</i><span>我的</span></router-link>
	      
	   
	</div>
</template>

<script>
import { Swiper,Flexbox, FlexboxItem} from 'vux'
export default {
	name: 'footer',
	components: {
    Swiper,
    Flexbox,
    FlexboxItem,
    
    
  },
}
</script>

<style lang="less">
	.footer{border-top: 0.05rem solid #dcdcdc; position:fixed; bottom:0; height: 2.1rem;width: 100%; background-color: rgba(235,235,235,.8); display: flex;
		a{color:#666; flex: 1; text-align: center;}
		.icon{display: block;}
		
	}
	
</style>