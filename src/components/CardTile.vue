<template>
  <div class="card card-1">
    <div class="card-body">
      <div class="card-profile">
        <img class="img-profile" src="../assets/profile.png">
        <h4> Jess Desrochers </h4>
        <h6> Software Developer </h6>
        <div class="card-profile-icon-group">
          <ul>
            <li>
              <a href="https://github.com/jessdesr" title="Github" target="_blank">
                <img src="../assets/github.svg"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jess_desrochers" title="Twitter" target="_blank">
                <img src="../assets/twitter.svg"/>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/jess-desrochers" title="LinkedIn" target="_blank">
                <img src="../assets/linkedin.svg"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .card {
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 400;
    overflow: hidden;
    position: relative;
    background: #fff;
    border-radius: .25rem;
    border: 0px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    z-index: 1;

    &-profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.75rem;
      text-align: center;
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

  .img-profile {
    border-radius: 50%;
    width: 60%;
  }

  .card-profile-icon-group {
    font-size: 1.5rem;
    ul {
      display: flex;
      align-items: center;
      max-width: 200px;
      margin: 0 auto;
      padding: 0;
      list-style-type: none;
      li {
        text-decoration: none;
        outline: 0;
        a {
          padding: .5rem;
          img {
            height: 22px;
          }

        }

      }

    }
  }
</style>
