<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import login from './components/login.vue';
import register from './components/register.vue';
import home from './components/home.vue';

//shared components
import header from './components/shared/header.vue';
import footer from './components/shared/footer.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components:{
    'login': login,
    'register': register,
    'home': home,
    'app-header': header,
    'app-footer': footer
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
