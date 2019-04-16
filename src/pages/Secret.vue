<template>
  <div class="main">
    <div class="content">
      <div class="inner container-fluid">
        <div class="row">
          <transition name="fade" mode="out-in">
            <div class="card card-1" key=1 v-if="!activeSession">
              <div class="card-body">
                <transition name="fade" mode="out-in">
                  <LoginForm v-if="signIn" v-on:swap-form="swapForm" v-on:sign-in="signedIn"/>
                  <SignUpForm v-else v-on:swap-form="swapForm" v-on:sign-in="signedIn"/>
                </transition>
              </div>
            </div>
            <div class="content" key=2 v-else>
              <div class="button-container">
                <b-button v-on:click="getCurrent">Get Current Number</b-button>
                <b-button v-on:click="getNext">Increment Count</b-button>
                <b-form>
                  <b-form-input v-model="numberToSet" type="number" min="0"></b-form-input>
                  <b-button v-on:click="onSubmit" type="button">Set a number</b-button>
                </b-form>
              </div>
              <div class="value-container">
                <h1>{{ value }}</h1>
              </div>
              <div class="button-container">
                <b-button v-on:click="logout" variant="primary">Logout</b-button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <vue-particles color="#dedede"></vue-particles>
  </div>
</template>

<script>
import LoginForm  from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

export default {
  name: 'Secret',

  data () {
    return {
      activeSession: !!localStorage.token,
      signIn: true,
      value: null,
      numberToSet: null,
    }
  },
  methods: {
    signedIn () {
      if (localStorage.token) {
        this.activeSession = !this.activeSession
      }
    },
    swapForm () {
      this.signIn = !this.signIn
    },
    getNext () {
      this.$http.get('/v1/next', {headers: {
        'Authorization': `Bearer ${localStorage.token}`,
      }})
        .then(request => this.setNumber(request))
        .catch(() => this.errorHappened())
    },
    getCurrent () {
      this.$http.get('/v1/current', {headers: {
        'Authorization': `Bearer ${localStorage.token}`,
      }})
        .then(request => this.setNumber(request))
        .catch(() => this.errorHappened())
    },
    onSubmit () {
      this.$http.put('/v1/current', {current: this.numberToSet}, {headers: {
        'Authorization': `Bearer ${localStorage.token}`,
      }})
        .then(request => this.setNumber(request))
        .catch(() => this.errorHappened())
    },
    setNumber (req) {
      if (req.data.data) {
        this.value = req.data.data.value
      } else {
        this.value = this.numberToSet
      }
    },
    errorHappened () {
      this.error = 'What happened'
      delete localStorage.token
      this.activeSession = false
      this.value = null
    },
    logout () {
      delete localStorage.token
      this.activeSession = false
      this.value = null
    }
  },

  components: {
    LoginForm,
    SignUpForm,
  },
}
</script>

<style lang="scss" scoped>
  #particles-js {
    position: absolute;
    height: 99vh;
    width: 70vw;
  }

  #particles {
    height: 150px;
    z-index: 1;
  }

  .container-fluid {
    height: 100%;
  }

  .main {
    background: #354250;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
  }

  .row {
    justify-content: center;
  }

  .content {
    width: 100%;
    padding-top: 0;
    justify-content: space-between;
    z-index: 10;
    position: fixed;
    height: 100%;

    @media (min-width: 992px) {
      padding-top: 4rem;
    }
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .form-control {
    display: initial;
    width: 100px;
    vertical-align: middle;
  }

  .value-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
  }

  h1 {
    font-size: 10rem;
    color: #efefef;
    margin: 0;
  }

  .card {
    font-size: 1rem;
    font-weight: 400;
    overflow: hidden;
    border: 0px;
    margin-bottom: 1.5rem;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255,255,255,0)
  }

  .card-1 {
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    min-width: 16rem;
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
  }

  .card-1:hover {
    box-shadow: 0 3px 10px rgba(0,0,0,0.25);
  }
</style>
