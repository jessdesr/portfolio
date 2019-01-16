<template>
  <div class="card card-1">
    <div class="card-header">
      <img class="card-header-img" src="../assets/icons8-support.svg">
      <h3 class="card-title">Skills</h3>
    </div>
    <div class="card-body">
      <div class="progressbar" v-for="(field, index) in fields" :key="index" :class="{ last: index==fields.length-1 }">
        <div class="progressbar-values">
          <span> {{ field.title }} </span>
          <span></span>
        </div>
        <div class="progressbar-bar">
          <div class="progress" v-bind:style="{ width: field.percent }"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SKILLS } from '../mixins/constants.js'
export default {
  data () {
    return {
      fields: SKILLS
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes animationProgress{
  0%{ width:0 }
}

.progressbar {
  margin-bottom: 1.25rem;
}

.progressbar-values {
  display: flex;
  justify-content: flex-start;
  padding-bottom: .25rem;

  span {
    font-weight: 400;
    color: rgba(0,0,0,.65);
  }

  span:last-of-type {
    margin-left: auto;
  }
}

.progressbar-bar, .progress {
  width: 100%;
  height: 6px;
  border-radius: 8px;
}

.progressbar-bar {
  position: relative;
  background-color: hsla(0,0%,62%,.3);
}

.progress {
  animation-duration: 2s;
  animation-name: animationProgress;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2d3844;
  transition: all 2s;
}
</style>
