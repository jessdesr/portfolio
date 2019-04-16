<template>
  <b-form>
    <div class="text-center">
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
    </div>
    <b-form-group :invalid-feedback="invalidFeedback">
      <b-form-input v-model="email" type="text" placeholder="Email" required></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-input v-model="name" type="name" placeholder="Full Name" required></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-input v-model="password" type="password" placeholder="Password" required></b-form-input>
    </b-form-group>

    <div class="text-center">
      <b-button @click="onSubmit" type="button" variant="primary" block>Sign up</b-button>
      <b-button variant="link" v-on:click="$emit('swap-form')">Log in?</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      name: '',
      password: '',
      invalidFeedback: '',
      error: ''
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('/users/register', {
        email: this.email,
        name: this.name,
        password: this.password
      })
        .then(request => this.signupSuccessful(request))
        .catch(() => this.signupFailed())
    },
    signupSuccessful (req) {
      if (!req.data.data.token) {
        this.signupFailed()
        return
      }

      localStorage.token = req.data.data.token
      this.error = false
      this.$emit('sign-in')
    },
    signupFailed () {
      this.error = 'Signup failed!'
      delete localStorage.token
    }
  }
}
</script>
