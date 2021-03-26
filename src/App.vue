<template>
  <div id="app">
    <background></background>
    <div class="app-site">
      <div class="pct-hero">
        <header>
          <div class="pct-hero-title"><router-link to="/"> Panthers Coding Team</router-link></div>
            <ul class="pct-hero-nav">
              <li><router-link to="/schedule">Schedule</router-link></li>
              <li><router-link to="/style-guide">Style Guide</router-link></li>
              <li><a href="https://bdpamemphis.org">BDPA Memphis</a></li>
            </ul>
        </header>
      </div>
    <registration></registration>  
    <router-view />
      <div class="pct-footer">
        © Copyright BDPA Memphis. All Rights Reserved {{ year() }}
      </div>
  </div>
  </div>
</template>
<script>
import Background from './components/Background.vue';
import Registration from './components/Registration.vue';
export default {
  name: "App",
  components: {
    Background,
    Registration
  },
  methods:{
    year(){
      var d = new Date();
      return  d.getFullYear();
    }
  }
};
</script>

<style lang="scss">
.app-site{
  z-index: 2;
  position: relative;
}
.pct-hero{
  background: transparentize($my-color-dark, .8);
  padding: 1vw 10vw;

  &-title{
    font-size: 1.5rem;
    font-weight: 900;
    a{
      position: relative;
      &::after {
        content: "";
        width: 80%;
        background-color: transparentize($my-color-accent, .33);
        position: absolute;
        bottom: 2px;
        left: 1rem;
        height: 1px;
      }
    }

    @media only screen and (max-width: 500px)  {
        font-size: 1.1rem;
    }
  }

  &-nav{
    font-size: 1.1rem;
    text-align: center;
    @media only screen and (max-width: 500px)  {
        font-size: 1rem;
    }
  }

  header{
    display: flex; 
    justify-content: space-between;
    color: $my-color-light;
    .pct-hero-nav{
      flex-grow: 1;
      max-width: 40vw;
      display: flex;
      justify-content: space-evenly;
      margin: 0 5vw;
      align-items: center;
      @media only screen and (max-width: 500px)  {
        max-width: 50vw;
        margin: 0 2vw;
      }

      li{
        margin-left: 1rem;
        @media only screen and (max-width: 500px)  {
          max-width: 12vw;
        }
      }
    }
  }

}

.pct-hero-nav li .router-link-exact-active{
    color: $my-color-primary-light;
}

.pct-footer{
  color:  transparentize($my-color-primary-light, .2);
  width: 100%;
  text-align: center;
  width: fit-content;
  padding: 1rem 1rem 0 1rem;
  margin: 0 auto;
}
</style>
