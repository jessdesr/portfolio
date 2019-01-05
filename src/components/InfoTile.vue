<template>
  <div class="card card-1">
    <div class="card-header">
      <img class="card-header-img" src="../assets/icons8-about.svg">
      <h3 class="card-title">Information</h3>
    </div>
    <div class="info">
      <div class="info-row" v-for="(field, index) in fields" :key="index" :class="{ last: index==fields.length-1 }">
        <div class="column title"> {{ field.title }}: </div>
        <div class="column data"> {{ field.data }} </div>
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
        {title: 'E-mail', data: EMAIL}
      ]
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
    max-width: 31%;
    font-weight: 600;
  }

  .data {
    flex: 5;
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
</style>
