<template>
  <div class="card card-1">
    <div class="card-header">
      <h3 class="card-title">About Me</h3>
    </div>
    <div class="card-body">
      Hello my darlings
    </div>
  </div>
</template>

<style lang="scss">
  .card {
    &-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 48px;
      min-height: 48px;
      padding: 0 1rem;
      border-bottom: 1px solid rgba(0,0,0,.12);
    }

    &-title {
      display: flex;
      align-items: center;
      margin: 0;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
</style>
