<template>
  <header class="header">
    <div class="header__container custom-container">
      <div class="header__wrapper">
        <div class="header__left">
          <a href="/">
            <img class="header__left-img" src="/logo.svg" />
          </a>
        </div>
        <div class="header__right">
          <custom-button :text="'SELL'" :size="'small'" :link="'/'" />

          <template>
            <custom-button v-if="!isAuth" :link="'/log-in'"  :text="'LOGIN'" :bg-color="'transparent'" :text-color="'#282828'" :size="'small'"/>
            <custom-favorite :link="'/'" />
          </template>
        </div>
      </div>

    </div>
  </header>
</template>

<script lang="ts">
import CustomButton from "@/components/elements/custom-button.vue";
import CustomFavorite from "@/components/elements/custom-favorite.vue"

export default {
  components: {
    CustomButton,
    CustomFavorite
  },
  data() {
    return {
      isAuth: {
        type: Boolean,
        default: false
      },
      actualUrl: {
        type: String,
        default: null
      }
    }
  },
  methods: {
    // checkUrl() {
    //   if (this.$)
    // }
  },
  // если страницы логин или создание нового аккаунта

  created() {
    // console.log(this.$route, window.location.href.fullPath === "");
    // if (this.$store.state.user.loggedIn) {
    //   this.isAuth = true;
  }

}
</script>

<style scoped lang="scss">
.header {
  background-color: #f8f8f8;
  
  &__wrapper {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
  }

  &__right {
    display: flex;
  }
}
</style>
