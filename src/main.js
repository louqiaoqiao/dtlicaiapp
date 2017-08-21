// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import  { LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin) //vux loading 插件

Vue.config.debug = true

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.emulateJSON = true

Vue.http.options.xhr = { withCredentials: true }

FastClick.attach(document.body) //防止用户恶意点击

Vue.http.interceptors.push(function(request, next) { //vue-resource interceptors拦截器
    // ...
    // 请求发送前的处理逻辑
    this.$vux.loading.show({
		        text: '加载中'
	})
    
    // ...
    next(function(response) {
        // ...
        // 请求发送后的处理逻辑
          this.$vux.loading.hide();
           
        // ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        return response
    })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  http: {
    header: {
      'Content-Type': 'application/json'
    }
  }
})




