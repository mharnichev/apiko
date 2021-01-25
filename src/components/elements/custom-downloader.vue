<template>
  <div class="custom-downloader">
      <p class="custom-downloader__title" v-if="title">
        {{ title }}
      </p>
    <div class="custom-downloader__wrapper">
      <span class="custom-downloader__span"></span>
      <input class="custom-downloader__input" type="file" ref="file" @change="onFileChange" multiple id="files" name="files[]">
      <div class="custom-downloader__space">
        <img v-if="url" :src="url" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      url: ''
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);

      this.$emit('addFile', this.url);
    }
  },

}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.custom-downloader {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 24px 0;

  &__wrapper {
    border-radius: 5px;
    background-color: #F9FAFB;
    border: 1px solid #DEDEE0;
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    color: #002a40;
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.2px;
    outline: none;
    position: relative;
    display: flex;
  }

  &__input {
    position: absolute;
    width: 92px;
    height: 92px;
    top: 15px;
    left: 15px;
    opacity: 0;
    cursor: pointer;
  }

  &__span {
    background-image: url("data:image/svg+xml,%3Csvg width='92' height='92' viewBox='0 0 92 92' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='92' height='92' rx='4' fill='%23E4E4E4'/%3E%3Crect x='44' y='27' width='4' height='38' rx='2' fill='%23349A89'/%3E%3Crect x='27' y='48' width='4' height='38' rx='2' transform='rotate(-90 27 48)' fill='%23349A89'/%3E%3C/svg%3E%0A");
    background-size: 92px 92px;
    width: 92px;
    height: 92px;
    display: block;
  }

  &__space {
    margin-left: 20px;

    img {
      width: 100%;
      height: 100%;
      max-width: 92px;
      max-height: 92px;
    }
  }

  &__title {
    font-size: 12px;
    line-height: 14px;
    color: #282828;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    padding: 0 0 4px;
  }

}

</style>