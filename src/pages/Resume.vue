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
