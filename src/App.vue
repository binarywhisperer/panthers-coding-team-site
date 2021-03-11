<template>
  <div id="app">
      <div class="pct-hero">
        <header>
          <div class="pct-hero-title"><router-link to="/">Panthers Coding Team</router-link></div>

            <ul class="pct-hero-nav">
              <li><router-link to="/">About</router-link></li>
              <li><router-link to="/schedule">Schedule</router-link></li>
              <li><router-link to="/style-guide">Style Guide</router-link></li>
            </ul>
        </header>
        <main>

        </main>
        <footer>
          <nav class="tabs">
            <div class="container">

            </div>
          </nav>
        </footer>
      </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.pct-hero{
  background: $my-color-dark;
  padding: 1vw 10vw;

  header{
    display: flex; 
    justify-content: space-between;
    color: $my-color-light;

    .pct-hero-title{
      font-size: 1.5rem;
    }

    .pct-hero-nav{
      flex-grow: 1;
      max-width: 25vw;
      display: flex;
      justify-content: space-evenly;
      margin: 0 5vw;
    }
  }

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
