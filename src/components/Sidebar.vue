<template>
  <div class="sidebar">
    <div class="profile">
      <img src="../assets/logo.svg">
      <h5>Jess Desrochers</h5>
      <h6>Software Developer Extraordinaire</h6>
    </div>
    <div class="nav-list">
      <div class="nav">
        <ul>
          <li v-on:click="$emit('shrink-sidebar')">
            <router-link to="/">
              <div class="img-container">
                <v-icon name="user"/>
              </div>
              <span>Profile</span>
            </router-link>
          </li>
          <li v-on:click="$emit('shrink-sidebar')">
            <router-link to="/resume">
              <div class="img-container">
                <v-icon name="file-alt"/>
              </div>
              <span>Resume</span>
            </router-link>
          </li>
          <li v-on:click="$emit('shrink-sidebar')">
            <router-link to="/projects">
              <div class="img-container">
                <v-icon name="briefcase"/>
              </div>
              <span>Projects</span>
            </router-link>
          </li>
          <li>
            <a href="http://jessdesrochers.com/blog" target="_blank" rel="noopener">
              <div class="img-container">
                <v-icon name="newspaper"/>
              </div>
              <span>Posts</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

  .sidebar {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
    position: fixed;
    width: 250px;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #2d3844;
    color: #ccc;
    transition: all 0.7s;
    transform: translate3d(-105%,0,0);

    @media (min-width: 992px) {
      transform: translateZ(0);
    }
  }

  .sidebar-img {
    color: #fff;
  }

  .img-container {
    width: 2rem;
    text-align: center;
  }

  .fa-icon {
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 2px;
    margin-right: 1rem;
    text-align: center;
  }

  .router-link-exact-active {
    font-weight: 600;
    color: #ccc;
  }

  a {
    display: flex;
    width: 100%;
    font-weight: 400;
    color: #65747b;
    line-height: 40px;
    user-select: none;
    text-decoration: none;
    :hover {
      transition: color .2s ease-in-out;
      color: #7e8e95;
      text-decoration: none;
    }
  }

  .profile {
    padding: .9125rem;
    text-align: center;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);

    img {
      height: 8rem;
      margin-bottom: 1rem;
      border: 2px solid #ccc;
      border-radius: 50%;
    }
  }

  h5 {
    margin-bottom: 0.25rem;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: 200;
    line-height: 1;
  }

  ul {
    margin-top: 20px;
  }

  li {
    display: flex;
    height: 40px;
    list-style-type: none;
  }

</style>
