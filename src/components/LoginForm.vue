<template>
  <b-form>
    <div class="text-center">
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
    </div>
    <b-form-group>
      <b-form-input v-model="email" type="text" placeholder="Email" required/>
    </b-form-group>

    <b-form-group :invalid-feedback="invalidFeedback">
      <b-form-input v-model="password" type="password" placeholder="Password" required/>
    </b-form-group>

    <div class="text-center">
      <b-button @click="onSubmit" type="button" variant="primary" block>Log In</b-button>
      <b-button variant="link" v-on:click="$emit('swap-form')">Sign Up?</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      invalidFeedback: '',
      error: ''
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('/users/authenticate', { email: this.email, password: this.password })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
      if (!req.data.data.token) {
        this.loginFailed()
        return
      }

      localStorage.token = req.data.data.token
      this.error = false
      this.$emit('sign-in')
    },
    loginFailed () {
      this.error = 'Login failed!'
      delete localStorage.token
    }
  }
}
</script>
