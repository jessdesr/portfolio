<template>
  <div class="header">
    <button v-on:click="$emit('toggle')" class="nav-toggle">
      <v-icon name="bars"/>
    </button>
    <h1 class="header-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background: #FFF;
    color: #000;
    position: fixed;
    display: flex;
    align-items: center;
    height: 4.0625rem;
    z-index: 4;
    width: 100%;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);

    &-title {
      font-size: 1.5rem;
      font-weight: 600;
      @media (min-width: 992px) {
        margin-left: 2rem;
      }
    }

    .fa-icon {
      height: 1.25rem;
      width: 1.25rem;
    }
  }

  button {
    display: inline-block;

    @media (min-width: 992px) {
      display: none;
    }

    position: relative;
    margin: 0;
    padding: .5rem 1.5625rem;
    outline: none;
    background-color: transparent;
    user-select: none;
    line-height: 1;
    border: 1px solid transparent;
    border-radius: .25rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .nav-toggle {
    width: 40px;
    height: 40px;
  }
</style>
