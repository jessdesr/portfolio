<template>
  <div class="main">
    <div class="content">
      <div class="inner container-fluid">
        <div class="row">
          <div class="col-lg-5">
            <CardTile/>
            <SkillsTile/>
          </div>
          <div class="col-lg-7">
            <AboutTile/>
            <div class="row">
              <div class="col-xl-6">
                <InfoTile/>
              </div>
              <div class="col-xl-6">
                <ExperimentsTile/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTile        from '../components/CardTile'
import AboutTile       from '../components/AboutTile'
import SkillsTile      from '../components/SkillsTile'
import InfoTile        from '../components/InfoTile'
import ExperimentsTile from '../components/ExperimentsTile'

export default {
  name: 'Profile',

  components: {
    CardTile,
    AboutTile,
    SkillsTile,
    InfoTile,
    ExperimentsTile,
  },
}
</script>
