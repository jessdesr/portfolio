<template>
  <div id="wrapper">
    <div class=container-fluid>
      <div>
        <Sidebar></Sidebar>
        <div class="main">
          <div class="header">
            <h1 class="header-title">Profile</h1>
          </div>
          <div class="content">
            <div class="inner container-fluid">
              <div class="row">
                <div class="col-sm-5">
                  <CardTile/>
                  <SkillsTile/>
                </div>
                <div class="col-sm-7">
                  <AboutTile/>
                  <InfoTile/>
                  <ExperimentsTile/>
                </div>
              </div>
            </div>
            <!-- <GridLayout
                  :layout.sync="layout"
                  :col-num="12"
                  :row-height="20"
                  :is-draggable="true"
                  :is-resizable="true"
                  :is-mirrored="false"
                  :vertical-compact="true"
                  :margin="[30, 30]"
                  :use-css-transforms="true">
              <GridItem v-for="(item, index) in layout"
                        :key="index"
                        :x="item.x"
                        :y="item.y"
                        :w="item.w"
                        :h="item.h"
                        :i="item.i"
                        :minH="item.minH"
                        :maxW="item.maxW"
                        @resize="resizeEvent">
                <component v-bind:is="item.i"></component>
              </GridItem>
            </GridLayout> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGridLayout   from 'vue-grid-layout'
import Sidebar         from './components/Sidebar'
import CardTile        from './components/CardTile'
import AboutTile     from './components/AboutTile'
import SkillsTile      from './components/SkillsTile'
import InfoTile        from './components/InfoTile'
import ExperimentsTile from './components/ExperimentsTile'

let testLayout = [
  {'x': 0, 'y': 0, 'w': 5, 'h': 7, 'minH': 7, 'maxW': 5, 'i': CardTile},
  {'x': 0, 'y': 1, 'w': 5, 'h': 3, 'i': SkillsTile},
  {'x': 5, 'y': 0, 'w': 7, 'h': 9, 'maxW': 7, 'minH': 9, 'i': AboutTile},
  {'x': 5, 'y': 4, 'w': 7, 'h': 6, 'minH': 6, 'maxW': 7, 'i': InfoTile},
  {'x': 5, 'y': 8, 'w': 7, 'h': 3, 'i': ExperimentsTile}
]

export default {
  name: 'App',

  components: {
    Sidebar,
    CardTile,
    AboutTile,
    SkillsTile,
    InfoTile,
    ExperimentsTile,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },

  data () {
    return {
      layout: testLayout
    }
  },

  methods: {
    resizeEvent: function (i, newH, newW) {
      console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW)
    }
  }
}
</script>

<style lang="scss">

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0 1rem;
  }

  body {
    background: #f2f2f7;
    font-family: Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  }

  .container-fluid {
    height: 100%;
    padding-left: 250px;
  }

  .main {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
  }

  .header {
    background: #FFF;
    color: #000;
    position: fixed;
    height: 4.0625rem;
    z-index: 4;
    width: 100%;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);

    &-title {
      margin-left: 3rem;
      margin-top: 1rem;
    }
  }

  .content {
    height: 100vh;
    padding-top: 4rem;

    .inner {
      padding: 3rem;
    }
  }

  .card {
    font-size: 1rem;
    font-weight: 400;
    overflow: hidden;
    border: 0px;
    margin-bottom: 1.5rem;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255,255,255,0);

    &-profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.75rem;
      text-align: center;
    }

    h4 {
      font-size: 1.125rem;
      margin-top: 1rem;
      margin-bottom: 0;
    }

    h6 {
      margin-top: .25rem;
      font-size: .8125rem;
      font-weight: 400;
      color: rgba(0,0,0,.54);
    }
  }

  .card-1 {
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
  }

  .card-1:hover {
    box-shadow: 0 3px 10px rgba(0,0,0,0.25);
  }

  .vue-grid-item.vue-grid-placeholder {
    background: transparent;
  }
</style>
