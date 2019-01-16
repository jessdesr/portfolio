<template>
  <div id="wrapper" :class="{nonscroll: isActive}">
    <div class=container-fluid>
      <div>
        <Sidebar v-on:shrink-sidebar="shrinkSidebar" :class="{active: isActive}"></Sidebar>
         <transition
          name="fade"
          mode="out-in"
        >
          <router-view  v-on:toggle-sidebar="toggleSidebar"/>
        </transition>
        <transition
          name="fade"
          mode="out-in"
        >
          <div
            class="sidebar-background"
            v-show="isActive"
            v-on:click="toggleSidebar"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'App',

  components: {
    Sidebar,
  },

  data () {
    return {
      isActive: false
    }
  },

  methods: {
    toggleSidebar: function () {
      this.isActive = !this.isActive
    },
    shrinkSidebar: function () {
      this.isActive = false
    }
  },
}
</script>

<style lang="scss">
  .active {
    transform: translateZ(0) !important;
  }

  .nonscroll {
    overflow: hidden;
  }

  .sidebar-background {
    display: inherit !important;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    transition: opacity 1;
    background-color: rgba(0,0,0,.2);
  }

  .sidebar-background[style*="display: none;"] {
    opacity: 0;
    pointer-events: none; /* disable user interaction */
    user-select: none; /* disable user selection */
}

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0 1rem;
  }

  body {
    background: #f2f2f7;
    font-family: Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-weight: 400;
  }

  .container-fluid {
    height: 100%;
    padding: 0px;
    transition: padding 0.65s ease;

    @media (min-width: 992px) {
      padding-left: 250px;
    }
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
          max-width: 1400px;

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

    &-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 48px;
      padding: 0 1rem;
      background: #fff;

      &-img {
        margin-right: 0.5rem;
      }
    }

    &-body {
      color: rgba(0,0,0,.65);
    }

    &-title {
      display: flex;
      align-items: center;
      margin: 0;
      font-size: 1.25rem;
      font-weight: 400;
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
