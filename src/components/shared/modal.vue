<template>
  <div>
    <b-btn v-b-modal.mammbaModal>Launch login modal</b-btn>
    <!-- Modal Component -->
    <b-modal id="mammbaModal" ref="mammbaModal">
      <div slot="modal-title">
        <slot name="title" class="text-center"></slot>
      </div>
      <div class="mammbaModalContent">
        <component ref="login" v-bind:is="content"></component>
      </div>
      <div slot="modal-footer">
        <div>
          <b-button v-on:click="login()" variant="primary">
            {{btnText}}
           </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import login from '../../components/login.vue';
import register from '../../components/register.vue';

export default {
  components:{
    'login': login,
    'register': register
  },
  data () {
    return {
      title: 'LOGIN',
      content: 'login',
      'btnText': 'Login'
    }
  },
  methods:{
    login: function(){
      //username=spongebob@mammba.com&password=partner123
      this.$http.post('http://jpcloudusa021.nshostserver.net:33926/mammba/login?username='+ this.$refs.login.email +'&password=' + this.$refs.login.password,{}).then(function(data){
        console.log(data);
      });
    }
  }
}
</script>

<style lang="scss">
span.modal-signup {
   cursor:pointer;
   color:blue;
   text-decoration:underline;
}
</style>
