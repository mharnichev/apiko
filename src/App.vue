<template>
  <div id="app">
    <portal-target name="modal" />
    <component :is="layout" id="root-wrapper">
      <navbar></navbar>
      <router-view />
    </component>
  </div>
</template>


<script>
import DefaultLayout from '@/layouts/default.vue';
import navbar from "./views/auth/Navbar.vue";


export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default-layout');
    }
  },
  components: {
    DefaultLayout,
    navbar
  }
}
</script>

<style scoped lang="scss">
#app {
  min-height: 100vh;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
</style>
