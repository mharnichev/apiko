<template>

  <button :type="type" :href="link" :class="[`button-wrapper ${size}`]" :style="[{'background-color': bgColor}, {color: textColor}]">
    <template  v-if="link" >
      <a :style="{color: textColor}" :href="link">{{text}}</a>
    </template>
    <template v-else>
      {{text}}
    </template>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    text: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'big'
    },
    bgColor: {
      type: String,
      default: '#349A89'
    },
    textColor: {
      type: String,
      default: '#FFFFFF'
    },
    link: {
      type: String,
      default: null
    },
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";

.button-wrapper {
  border-radius: 5px;
  margin: 16px 0;
  color: $white-d;
  display: block;
  text-align: center;
  text-decoration: none;
  border: 0;
  transition: opacity 0.4s ease-out;
  cursor: pointer;
  
  a {
    //color: $white-d;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    border: 0;
    outline: none;
  }

  &.small {
    padding: 5px 48px;
    font-size: 14px;
  }

  &.big {
    font-size: 1rem;
    max-width: 378px;
    width: 100%;
    padding: 20px 0;
  }

  &.none {
    padding: 0;
  }
}
</style>
