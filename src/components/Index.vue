<template>
  <div class="content">
  	<div class="banner">
   	<swiper loop auto :list="demo06_list" dots-class="custom-red" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
   	</div>
   <div class="index_menu">
   	<flexbox>
      <flexbox-item>
      	<a href="javascript:;"><i class="icon iconfont">&#xe669;</i><span>投资放心</span></a>
      </flexbox-item>
      <flexbox-item>
      	<a href="javascript:;"><i class="icon iconfont">&#xe7e3;</i><span>定制产品</span></a>
      </flexbox-item>
      <flexbox-item>
      	<a href="javascript:;"><i class="icon iconfont">&#xe715;</i><span>安全保障</span></a>
      </flexbox-item>
      <flexbox-item>
      	<a href="javascript:;"><i class="icon iconfont">&#xe7ed;</i><span>合法合规</span></a>
      </flexbox-item>
    </flexbox>
   </div>
 	 <div class="index_pro">
 	 		<div class="pro_item">
      	<p class="proname"><span>钿欣壹号-OL20170601</span> <span class="right">东升旭日   钿入你心</span></p>
      	<p class="proyeild"><em>7.00</em>%</p>
      	<p class="prohold">持有30天后，可随时退出</p>
      	<a href="javascript:;" class="buypro">立即投资</a>
      </div>
      <div class="pro_item">
      	<p class="proname"><span>钿欣壹号-OL20170601</span> <span class="right">东升旭日   钿入你心</span></p>
      	<p class="proyeild"><em>7.00</em>%</p>
      	<p class="prohold">持有30天后，可随时退出</p>
      	<a href="javascript:;" class="buypro">立即投资</a>
      </div>
     
 	 </div>
 	 
    
    
  </div>
</template>
<script>
import { Swiper,Flexbox, FlexboxItem} from 'vux'


const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  
}]

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
}))



export default {
  components: {
    Swiper,
    Flexbox,
    FlexboxItem,
    
    
  },
  methods: {
    
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
    
   
  },
  data () {
    return {
      
      demo06_list: urlList,
     
      demo06_index: 0,
     
     
    }
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
.index_menu{
	background-color: #fff; border-radius: .2rem;padding-bottom: .5rem;
	a{color:#666;text-align:center;
		span{display:block;}
	}

	.iconfont{display:block; color:#be272e; font-size: 1.8rem; }
}
.index_pro{background-color: #fff; margin: .5rem 0;border-radius: .2rem; text-align: center;
	.pro_item{border-bottom: 0.05rem solid #dcdcdc;padding:1rem .5rem;}
	.pro_item:last-of-type{border-bottom: none;}
	
		.proname{color: #000;  display: flex;font-size: .7rem;
		span{flex: 1; text-align: left;}
		span.right{text-align: right;color:#999;font-size: .6rem;}
		}
		.proyeild{
			color:#be272e;margin-top:1rem;
				em{
					font-style: normal;font-size: 1.4rem;
				}
			}
		.prohold{color:#999;margin-top:1rem; font-size: .7rem;}	
		.buypro{display:block; background-color:#be272e; color:#fff;width:98%; line-height: 2rem; text-align: center;border-radius:.3rem;margin:1rem auto .5rem; font-size:.8rem;}

}
.vux-slider > .custom-red > a > .vux-icon-dot.active{ background-color: #be272e;}
</style>