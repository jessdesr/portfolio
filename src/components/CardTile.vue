<template>
  <div class="card card-1">
    <div class="card-body">
      <div class="card-profile">
        <img class="img-profile" src="../assets/profile.png" alt="">
        <h4> Jess Desrochers </h4>
        <h6> Software Developer </h6>
        <div class="card-profile-icon-group">
          <ul>
            <li v-for="(external, index) in externals" :key="index">
              <a :href="external.link" :title="external.title" target="_blank" rel="noopener">
                <img :src="external.source" :alt="'Link to ' + external.title"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const github   = require('../assets/github.svg')
const twitter  = require('../assets/twitter.svg')
const linkedin = require('../assets/linkedin.svg')
const codepen  = require('../assets/codepen.svg')

export default {
  data () {
    return {
      externals: [
        { title: 'Github', link: 'https://github.com/jessdesr', source: github },
        { title: 'Twitter', link: 'https://twitter.com/jess_desrochers', source: twitter },
        { title: 'LinkedIn', link: 'https://linkedin.com/in/jessdesr', source: linkedin },
        { title: 'Codepen', link: 'https://codepen.io/jessdesr/', source: codepen },
      ]
    }
  }
}
</script>

<style lang="scss">
  .img-profile {
    border-radius: 50%;
    width: 8rem;
  }

  .card-profile {
    color: rgba(0,0,0,.87);
  }

  .card-profile-icon-group {
    font-size: 1.5rem;
    ul {
      display: flex;
      align-items: center;
      max-width: 200px;
      margin: 0 auto;
      padding: 0;
      list-style-type: none;
      li {
        text-decoration: none;
        outline: 0;
        a {
          padding: .5rem;
          img {
            height: 1.375rem;
          }

        }

      }

    }
  }
</style>
