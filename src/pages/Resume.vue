<template>
  <div class="main">
    <div class="content">
      <div class="inner container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <ExperienceTile/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceTile from '../components/ExperienceTile'

export default {
  name: 'Resume',

  components: {
    ExperienceTile,
  },
}
</script>

<style lang="scss" scoped>

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
