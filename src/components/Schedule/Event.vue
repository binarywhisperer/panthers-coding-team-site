<template>
<div>
  <ul>
    <li>
      <div class="pct-card card">
        <header class="card-header">
          <div class="pct-card-header">
            <div class="pct-card-header-title">{{ event.title }}</div>
            <div class="pct-card-header-date">{{ myDate }}<span v-if="event.time"> @ {{ event.time }}</span></div>
          </div>
        </header>
        <main class="card-content" v-if="event.description">
          <div class="content">
            {{ event.description }}
          </div>
        </main>
        <footer class="pct-card-footer" v-if="event.links.length">
          <header @click="toggleLinks" :class="linkClass">Links <span>(Click to expand)</span></header>
          <main>
            <ul>
              <li v-for="link in event.links" :key="link.title">
                <a :href="link.url">{{ link.title }} - {{ link.url }}</a>
              </li>
            </ul>
          </main>
        </footer>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Event",
  props: ['event'],
  data(){
    return {
      expandLink: false
    }
  },
  methods:{
    toggleLinks(){
      this.expandLink = !this.expandLink
    }
  },
  computed:{
    myDate(){
      const d = new Date(this.event.date);
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      return `${mo} ${da}`
    },
    linkClass(){
      return {
        expand: this.expandLink
      }
    }
  }
};
</script>

<style scoped lang="scss">


.pct-card{
  margin: 0 0 2rem 0;
}

.pct-card-header{
  padding: .5rem 1rem; 
  width: 100%;
  background: $my-color-dark;
  display: flex; 
  justify-content: space-between;
  color: $my-color-light;

  &-title{
    font-weight: 700;
    font-size: 1.25rem;
  }
  &-date{
    color: $my-color-primary-light;
  }
}

.pct-card-footer{
  background:  $my-color-light;
  header{
    cursor: pointer;
    padding: .25rem 1rem;
    width: 100%;
    background: lighten($my-color-dark, 20%);
    color: $my-color-light;
    span{
      font-size: .75rem;
      color: transparentize($my-color-light, .5);
      transition: opacity 0.5s cubic-bezier(0, 1, 0, 1);
    }
  }
  main{
    max-height: 0;
    overflow: none;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    ul{
      padding: 1rem;
      font-weight: 700;
      li{
        border-bottom: 1px solid transparentize($my-color-accent, .80);
        margin: 0 0 .5rem 0;
      }
    }
  }
  header.expand {
    span{ 
        opacity: 0;
      }
    & + main {
      max-height: 100vh;
      
    }
  }
}
</style>
