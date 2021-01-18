<template>
  <footer class="footer">
    <div class="footer_container custom-container">
      <p class="footer_text">Copyright © {{ CurrentYear }}. Privacy Policy.</p>
    </div>
  </footer>
</template>

<script lang="ts">

export default  {
  computed: {
    CurrentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>

.footer {
  background-color: #f1f1f3;
  padding: 20px 0 30px;

  &_text {
    color: #C0C4CE;
    text-align: center;
    font-size: 0.875rem;
  }
}
</style>
