<template>
  <div>
    <!-- Modal Component -->
    <b-modal v-model="show" id="mammbaModal" ref="mammbaModal">
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
import { router } from '../../main';
import { bus } from '../../main';

export default {
  components:{
    'login': login,
    'register': register
  },
  data () {
    return {
      title: 'LOGIN',
      content: 'login',
      'btnText': 'Login',
      show: false
    }
  },
  methods:{
    login: function(){
        //username=spongebob@mammba.com&password=partner123
      this.$http.post('http://jpcloudusa021.nshostserver.net:33926/mammba/login?username='+ this.$refs.login.email +'&password=' + this.$refs.login.password,{})
      .then(function(data){
        /* eslint-disable no-console */
        console.log(data);

        if (data.body._csrf) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(data));
              console.log('data stored');
              this.$router.push('/dashboard');
              this.show = false;
              bus.$emit('login', true);
          }

        /* eslint-enable no-console */
      }, response =>{
        console.log(response);
        // this.flash({ message: 'some message', variant: 'success' });
        // this.$store.commit('FLASH/SET_FLASH', { message: 'some message', variant: 'success' });
      });
    }
  },
  created(){
    bus.$on('showModal', (data) => {
      this.show = data;
    })
  }
};
</script>

<style lang="scss">
span.modal-signup {
   cursor:pointer;
   color:blue;
   text-decoration:underline;
}
</style>
