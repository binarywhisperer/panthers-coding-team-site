<template>
  <div>
    <!-- <h1>Search</h1>
    <input class="input is-primary" type="text" placeholder="Primary input">
    <ul class="tags">
      <li v-for="(tag) in tags" :key="tag"> <button class="button is-primary">{{ tag }}</button></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "Search",
  computed: {
    tags() {
      return this.$store.state.schedule.tags;
    },
  }
};
</script>

<style scoped lang="scss">
.tags{
  display: flex;

  li{
    margin: 5px;
  }
}
</style>
