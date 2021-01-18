<template>
  <div class="custom-textarea">
    <label class="custom-textarea__label" :for="label" v-if="title">
      {{title}}
    </label>
    <textarea
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :id="inputId ? inputId : null"
        class="custom-textarea__input"
        @input="validateForm($event.target.value)"
    ></textarea>
    <slot></slot>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "Enter text here"
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String
    },
    inputId: {
      type: String
    }
  },
  methods: {
    validateForm(value) {
      this.$emit("input", value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.custom-textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  &__label {
    font-size: 12px;
    line-height: 14px;
    color: $dark-d;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    padding: 15px 0 4px;
  }

  &__input {
    border-radius: 5px;
    background-color: #F9FAFB;
    border: 1px solid #DEDEE0;
    box-sizing: border-box;
    width: 100%;

    box-sizing: border-box;
    padding: 20px 12px;
    color: #002a40;
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.2px;
    outline: none;
    resize: none;
    height: 180px;
  }
}
</style>