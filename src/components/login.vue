<template>
  <div>

    <div>
      <b-form-input v-model="email"
                 type="text" :state="emailState"
                 placeholder="Email"></b-form-input>
    </div>

    <div>
      <b-form-input v-model="password"
                 type="password" :state="passwordState"
                 placeholder="Password"></b-form-input>
    </div>

    <div  class="text-center login-registration-link">Don't have an account? <span class="modal-signup">Signup here</span></div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">

</style>
