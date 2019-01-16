<template>
  <div class="card card-1">
    <div class="card-header">
      <img class="card-header-img" src="../assets/icons8-about.svg">
      <h3 class="card-title">Information</h3>
    </div>
    <div class="info">
      <div class="info-row" v-for="(field, index) in fields" :key="index" :class="{ last: index==fields.length-1 }">
        <div class="column title"> {{ field.title }}: </div>
        <div v-if="fieldIsEmail(field.title)" class="column data">
          <div class="code-highlight" title="Like it? VSCode Dark+ Theme!">
            <div>
              <span class="syntax-color">let </span>
              <span class="var-color">x </span>
              =
              <span class="name-color">'{{ field.data.first }}'</span>;
            </div>
            <div>
              <span class="syntax-color">let </span>
              <span class="var-color">y </span>
              =
              <span class="name-color">'{{ field.data.last }}'</span>;
            </div>
            <div>&nbsp;</div>
            <div>
              <span class="console-color">console</span>.<span class="log-color">log</span>(<span class="var-color">x </span>
              +
              <span class="name-color">'@' </span>
              +
              <span class="var-color">y </span>
              +
              <span class="name-color">'{{field.data.tld}}'</span>);
            </div>
          </div>
        </div>
        <div v-else class="column data"> {{ field.data }} </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FULL_NAME, BIRTHDAY, ROLE, NATIONALITY, LOCATION, EMAIL } from '../mixins/constants.js'
export default {
  data () {
    return {
      fields: [
        {title: 'Name', data: FULL_NAME},
        {title: 'Age', data: Math.abs(new Date(Date.now() - new Date(BIRTHDAY).getTime()).getUTCFullYear() - 1970)},
        {title: 'Role', data: ROLE},
        {title: 'Nationality', data: NATIONALITY},
        {title: 'Location', data: LOCATION},
        {title: 'E-mail', data: this.convertEmailToCode(EMAIL)},
      ]
    }
  },

  methods: {
    fieldIsEmail: function (title) {
      return title === 'E-mail'
    },

    convertEmailToCode: function (email) {
      const split = email.indexOf('@')
      const dot = email.lastIndexOf('.')
      return {
        first: email.substr(0, split),
        last: email.substr(split + 1, dot - split - 1),
        tld: email.substr(dot, email.length),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }

  .info-row {
    height: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ddd;
  }

  .title {
    flex: 2;
    max-width: 40%;
    font-weight: 600;
    white-space: nowrap;
  }

  .data {
    flex:  6;
  }

  .column {
    display: flex;
    align-items: center;
    padding: .625rem 1rem;
    color: rgba(0,0,0,.65);
    vertical-align: middle;
  }

  .last {
    border-bottom: 0px;
  }

  .code-highlight {
    width: 100%;
    padding: .75rem;
    margin: 0.25rem 0.25rem 0.25rem 0;
    background-color: #2d3844;
    border-radius: .5rem;
    font-family: Liberation Mono,SFMono-Regular,Consolas,Menlo,Courier,monospace;
    font-size: .8rem;
    color: #fff;

    .syntax-color { color: #9CDCFE }
    .var-color { color: #9CDCFE }
    .name-color { color: #CE9178 }
    .console-color { color: #4EC9B0 }
    .log-color { color: #DCDCAA }
  }
</style>
