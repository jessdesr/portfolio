<template>
  <div class="sidebar">
    <div class="logo">
    </div>
    <div class="profile">
      <img src="../assets/logo.svg">
      <h5>Jess Desrochers</h5>
      <h6>Software Engineer Extraordinaire</h6>
    </div>
    <div class="nav-list">
      <div class="nav">
        <ul>
          <li>Profile</li>
          <li>Projects</li>
          <li>Experiments</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }
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
    transition: all 0.3s;
  }

  .profile {
    padding: .9125rem;
    text-align: center;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }

  h5, h6 {
    font-weight: 200;
    line-height: 1;
  }

</style>
