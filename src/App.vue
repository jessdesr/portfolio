<template>
  <div id="wrapper">
    <div class=container-fluid>
      <div class=row>
        <Sidebar></Sidebar>
        <div class="main">
          <div class="header">
            <h4 class="header-title">Profile</h4>
          </div>
          <div class="content">
            <div class="content inner container-fluid">
              <div class="row">
                <CardTile class="col-sm-4"></CardTile>
                <ProfileTile class="col-sm-7"></ProfileTile>
                <SkillsTile class="col-sm-4"></SkillsTile>
                <InfoTile class="col-sm-4"></InfoTile>
                <ExperimentsTile class="col-sm-4"></ExperimentsTile>
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

  .container-fluid {
    height: 100%;
    padding-left: 265px;
  }

  .main {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
  }

  .header {
    background: #212121;
    color: #FFF;
    position: fixed;
    height: 4rem;
    z-index: 4;
    width: 100%;

    &-title {
      margin-left: 2rem;
      margin-top: 1rem;
      font-weight: 200; 
    }
  }

  .content {
    background: #303030;
    height: 100vh;
    padding-top: 3rem;

    .inner {
      padding: 3rem;
    }
  }
</style>
