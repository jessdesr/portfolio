<template>
  <div class="card card-1">
    <div class="card-header">
      <h3 class="card-title">
        <svg viewBox="0 0 16 16" id="profile-svg">
          <path d="M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 8.839844 12.523438 10.0625 11.734375 11.015625 C 11.304688 9.796875 10.375 8.816406 9.1875 8.332031 C 9.683594 7.875 10 7.222656 10 6.5 C 10 5.125 8.875 4 7.5 4 C 6.125 4 5 5.125 5 6.5 C 5 7.222656 5.316406 7.875 5.8125 8.332031 C 4.625 8.816406 3.699219 9.796875 3.269531 11.015625 C 2.476563 10.0625 2 8.839844 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 7.5 5 C 8.335938 5 9 5.664063 9 6.5 C 9 7.335938 8.335938 8 7.5 8 C 6.664063 8 6 7.335938 6 6.5 C 6 5.664063 6.664063 5 7.5 5 Z M 7.5 9 C 9.199219 9 10.59375 10.207031 10.917969 11.808594 C 9.976563 12.554688 8.792969 13 7.5 13 C 6.207031 13 5.023438 12.554688 4.085938 11.808594 C 4.40625 10.207031 5.800781 9 7.5 9 Z "/>
        </svg>
        About Me
      </h3>
    </div>
    <div class="card-body">
      <p>
        As a software developer with 2 years of experience working in the fast paced world of startups, my skills have been sharpened on the job, where I learned to design robust, flexible, and beautiful software to meet complex and varied requirements.
      </p>
      <p>
        Until recently, I worked as a software engineer in a small team at Control, a Vancouver startup focused on finacial analytics for the business sector.  In this role I thrived not only as a developer able to  .
      </p>
      <p>
        I’m currently freelancing and experimenting with new technologies while I pursue new opportunities.  Feel free to contact me through LinkedIn or through my e-mail!
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

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
      background: #fff;
    }

    &-title {
      display: flex;
      align-items: center;
      margin: 0;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }

  #profile-svg {
    position: relative;
    width: 1.375rem;
    height: 1.375rem;
    opacity: .87;
    margin-right: .5rem;
  }

  .card-body {
    font-weight: 200;
  }
</style>
