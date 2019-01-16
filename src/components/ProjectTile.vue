<template>
  <div class="card card-1 project">
    <div class="card-header">
      <div class="project-image">
        <img :src="project.image"/>
      </div>
      <div class="project-title">
        <h4>{{ project.title }}</h4>
        <small>{{ project.byline }}</small>
      </div>
      <div class="project-link">
        <a :href="project.link">
          <v-icon name="external-link-alt"/>
        </a>
      </div>
    </div>
    <div class="card-body">
      <span v-html="project.description">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.card-header {
  position: relative;
  display: flex;
  padding: 1rem 0 1rem 1rem;
}

h4 {
  margin-top: 0;
  font-size: 1.25rem;
}

small {
  color: rgba(0,0,0,.54);
}

i {
  font-weight: 600;
}

.project {
  display: flex;

  &-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-image {
    display: flex;
    width: 40px;
    margin-right: 0.5rem;

    @media (min-width: 992px) {
      width: 50px;
    }

    img {
      width: 40px;
      height: 40px;
      border: 2px solid #e8e8e8;
      border-radius: 50%;

      @media (min-width: 992px) {
        width: 50px;
        height: 50px;
      }
    }
  }

  &-link {
    position: absolute;
    top: .5rem;
    right: .5rem;

    @media (min-width: 992px) {
      right: .8125rem;
      margin-left: auto;
    }
  }
}
</style>
