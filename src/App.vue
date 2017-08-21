<template>
  <div id="app">
    <router-view></router-view>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
import AppFooter from './components/Footer.vue'

export default {
  name: 'app',
  components:{AppFooter},
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import url("assets/css/sm.min.css");
@import url("assets/css/newstyle.css");
</style>

