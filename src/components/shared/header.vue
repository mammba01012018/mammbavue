<template>
<div class="header-body">
  <div class="row">
    <div class="col-sm-4">
      <img src="../../assets/logo.jpg" alt="MAMMBA LOGO" height="50" width="162">
    </div>
    <div class="col-sm-4 login-header">
    </div>
    <div class="col-sm-4">
      <nav>
        <ul>
          <li v-if="!isLoggedIn" v-on:click="showModal()"><img src="../../assets/login.png" alt="MAMMBA LOGO" height="25" width="25"> <span>LOGIN</span></li>
          <li v-if="isLoggedIn" v-on:click="logout()"><img src="../../assets/login.png" alt="MAMMBA LOGO" height="25" width="25"> <span>LOGOUT</span></li>
        </ul>
      </nav>
      <modal ref="modal">
        <h3 slot="title">Login</h3>
      </modal>
    </div>
  </div>
</div>
</template>

<script>
import modal from '../../components/shared/modal.vue';
import { bus } from '../../main';

export default {
  components:{
    'modal': modal
  },
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods:{
    showModal: function(){
     bus.$emit('showModal', true);
   },
   logout: function(){
     // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.$router.push('/');
   }
 },
 created(){
   const loggedIn = localStorage.getItem('user');
   if(loggedIn){
     this.isLoggedIn = true;
   }

   bus.$on('login', (data) => {
     this.isLoggedIn = data;
   })
 }
}
</script>

<style scoped lang="scss">
div{
  background-color: #c9ebec;
}

ul{
    list-style-type: none;
    text-align: right;
    margin: 0;
}

li{
  display:inline-block;
  margin: 0 10px;
  cursor: pointer;
  border-left: 1px solid #ebebeb;
}

a{
  color: #444;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}

nav{
  background: #c9ebec;
  padding: 14px 0;
}

.router-link-active{
  background: #eee;
  color: #444;
}

.header-body {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
