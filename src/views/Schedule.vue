<template>
  <div class="pct-container">
    <h1>Schedule</h1>
    <header>
      <Search></Search>
    </header>
    <main>
      <Event v-for="(event, id) in events" :event="event" :key="id"></Event>
    </main>
  </div>
</template>

<script>
import Event from '../components/Schedule/Event.vue';
import Search from '../components/Schedule/Search.vue';
export default {
  name: "StyleGuide",
  components: {Search, Event},
  computed: {
    events() {
      return this.$store.state.schedule.events;
    },
    tags() {
      return this.$store.state.schedule.tags;
    },
  }
};
</script>

<style scoped lang="scss">
@include h1InHero();
h3 {
  color: $my-color-primary;
  font-weight: 900;
  font-size: 2rem;
  text-shadow: -1px 1px 2px #000;
}
</style>
