<template>
  <section class="default-layout">
    <header-block />
    <router-view  />
    <footer-block />
  </section>
</template>


<script>
import HeaderBlock from "@/components/header";
import FooterBlock from "@/components/footer";

export default {
  components: {
    HeaderBlock,
    FooterBlock
  }
}


</script>


<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
  background-color: #f8f8f8;
  justify-content: space-between;
}
</style>