<template>
  <div class="custom-wrapper">
    <div :class="[`custom-wrapper__container custom-container ${size}`]">
      <p v-if="title" class="custom-wrapper__title">
        {{title}}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    size: {
      type: String,
      default: 'small'
    },
    title: {
      type: String,
      default: ""
    }

  }
}

</script>


<style scoped lang="scss">
@import "src/assets/styles/variables";

.custom-wrapper {
  padding: 0 1rem;

  @include for-small() {
    padding: 0 0.5rem;
  }
  
  &__container {
    background-color: $white-d;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 6px;
  }

  &__conteiner {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 22px;
    line-height: 25px;
    color: $dark-d;
    padding: 25px 0 16px;
    text-align: center;
  }
}

.custom-wrapper__container.custom-container {
  &.large {
    max-width: 1140px;
  }
}
</style>