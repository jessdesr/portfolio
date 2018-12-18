<template>
  <div id="wrapper">
    <div class=container-fluid>
      <div class=row>
        <Sidebar></Sidebar>
        <div class="main">
          <div class="header">
            <h1 class="header-title">Profile</h1>
          </div>
          <div class="content">
            <div class="inner container-fluid">
              <div class="row">
                <div class="col-sm-5">
                  <CardTile></CardTile>
                  <SkillsTile></SkillsTile>
                </div>
                <div class="col-sm-7">
                  <ProfileTile></ProfileTile>
                  <InfoTile></InfoTile>
                  <ExperimentsTile></ExperimentsTile>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar         from './components/Sidebar'
import CardTile        from './components/CardTile'
import ProfileTile     from './components/ProfileTile'
import SkillsTile      from './components/SkillsTile'
import InfoTile        from './components/InfoTile'
import ExperimentsTile from './components/ExperimentsTile'

export default {
  name: 'App',

  components: {
    Sidebar,
    CardTile,
    ProfileTile,
    SkillsTile,
    InfoTile,
    ExperimentsTile
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
    padding-top: 3rem;

    .inner {
      padding: 3rem;
    }
  }
</style>
