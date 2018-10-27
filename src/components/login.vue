<template>
  <div>

    <div>
      <b-form-input v-model="email"
                 type="text" :state="emailState"
                 placeholder="Email"></b-form-input>
    </div>
    <br/>
    <div>
      <b-form-input v-model="password"
                 type="password" :state="passwordState"
                 placeholder="Password"></b-form-input>
    </div>
    <br/><br/>
    <div  class="text-center login-registration-link">
      Don't have an account? <router-link to="/register" @click.native="hideModal()"><a>Sign up here</a></router-link>
    </div>
  </div>
</template>

<script>
import { bus } from '../main';

export default {
  data () {
    return {
      email: '',
      emailState: null,
      password: '',
      passwordState: null
    }
  },
  methods: {
    hideModal: function(){
     bus.$emit('showModal', false);
    }
  }
}
</script>

<style lang="scss">

</style>
