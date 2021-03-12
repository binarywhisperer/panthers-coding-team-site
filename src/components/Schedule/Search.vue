<template>
  <div>
    
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
