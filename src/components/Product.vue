<template>
  <div class="content">
			<div class="prolist">
		    <scroller lock-x scrollbar-y use-pullup use-pulldown height="580px" @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" v-model="status" ref="scroller">
		      <div class="box2">
		        <div class="prorow" v-for="(item, n) in items">
				    	<p class="protit">{{item.productName}}-{{item.productNo}}</p>
				    	 <p class="promoney">
				    	  	<span class="surplus_money"><em>{{item.lockAmount/10000}}</em>万元<br>产品规模</span>		    		
				    		<span class="past_time">封闭期：{{item.booktime}}天</span>
				    	</p> 	
				    	<p class="proopt">
				    		   <span class="start_num">10000元起投</span>
			             <router-link to="/prodetail" class="yy_btn">立即预约</router-link>
			        </p>	
			    	</div>
		      </div>
		      <!--pullup slot-->
		      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
		        <span v-show="status.pullupStatus === 'default'"></span>
		        <span class="pullup-arrow" v-show="status.pullupStatus === 'down' || status.pullupStatus === 'up'" :class="{'rotate': status.pullupStatus === 'up'}">↑</span>
		        <span v-show="status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
		      </div>
		    </scroller>
		    
	   </div>
	   
  </div>
</template>

<script>
import { Scroller,Loading,Spinner,TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'product',
  directives: {
    TransferDom
  },
  data () {
    return {
      items: [],
	    apiUrl: 'http://demo.dongtianjr.com/public/index.php/web/louqq/index.html',
	    n: 10,
      pullupEnabled: true,
      status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      },
      show1: false,
      text1: 'Processing'
      
    }
  },
  props: {
    usePulldown: {
      type: Boolean,
      default: false,
    },
    usePullup: {
      type: Boolean,
      default: false,
    },
  },
  components: {
  	Loading,
    Scroller,
    Spinner
  },
  created: function () {
  	  
				this.getCustomers()//获取php数据
  	   
	},
	
	methods:{
					
		getCustomers() {
			
			this.$http.get(this.apiUrl).then(function(response){
				if(!response.ok){
					alert("ok");
				}
				  
				 this.items = response.data
				  
				
			    // 响应成功回调
			}, function(response){
				
			    // 响应错误回调
			})
				
		},
		 loadMore () {
      setTimeout(() => {
        this.n += 10
        setTimeout(() => {
          this.$refs.scroller.donePullup()
        }, 10)
      }, 2000)
    },
    refresh () {
      setTimeout(() => {
        this.n = 10
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scroller.donePulldown()
            this.pullupEnabled && this.$refs.scroller.enablePullup()
          }, 10)
        })
      }, 2000)
    },
    changePullupStatus (enabled) {
      if (enabled) {
        this.$refs.scroller.enablePullup()
        this.pullupEnabled = true
      } else {
        this.$refs.scroller.disablePullup()
        this.pullupEnabled = false
      }
    },
    
		
  }
}
</script>

<style scoped>
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.rotate {
  display: inline-block;
  transform: rotate(-180deg);
}
.pullup-arrow {
  transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>
