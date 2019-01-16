<template>
  <div class="main">
    <Header v-on:toggle="$emit('toggle-sidebar')" title="Projects"/>
    <div class="content">
      <div class="inner container-fluid">
        <div v-masonry transition-duration="0.5s" item-selector=".item">
          <div v-masonry-tile class="item col-md-12 col-xl-6" v-for="(project, index) in projects" :key="index">
            <ProjectTile :project="project"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header             from '../components/Header'
import ProjectTile        from '../components/ProjectTile'
import img                from '../assets/logo.svg'
import hacktrack          from '../assets/hacktrackerlogo.png'

export default {
  name: 'App',

  components: {
    ProjectTile,
    Header,
  },

  data () {
    return {
      projects: [
        {
          title: 'Hack Track',
          byline: 'Score tracker for Android: Netrunner',
          image: hacktrack,
          link: 'https://github.com/jessdesr/hack-tracker',
          description: 'Hack Track is an Android application for use with the <i>Android: Netrunner</i> card game. It keeps track of the various resources, tokens, and actions that take place in the game. <br/> <li>Variable click track using touch gestures to increment/decrement clicks</li><li>Flipped resource counts for opponent\'s convenience</li><li>Unique layouts for the Corporation and the Runner</li>'
        },
        {
          title: 'Personal Portfolio Site',
          byline: 'What you\'re looking at right now!',
          image: img,
          link: 'https://github.com/jessdesr/portfolio',
          description: '<p> Designed and implemented using the <code class="highlighter-rouge">Vue.js</code> framework, inspired by Material tiles and Single Page Application layouts.  The site is structured to be fairly reuseable, with most content inserted programatically, via a single constants file that can be modified easily.</p>'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
