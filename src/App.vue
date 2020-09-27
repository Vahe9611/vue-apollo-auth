<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const DEFAULT_LAYOUT = 'default';

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || DEFAULT_LAYOUT}-layout`;
    },
  },
};
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  font-family: Roboto;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
