<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
      <span :class="['arrow-icon', {open: open}]">
        <span class="left-bar"></span>
        <span class="right-bar"></span>
      </span>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
          v-for="(option, i) of options"
          :key="i"
          @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
          ? this.default
          : this.options.length > 0
              ? this.options[0]
              : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";

.custom-select {
  max-width: 285px;
  width: 100%;
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #f9fafb;
  border-radius: 6px;
  border: 1px solid #dedee0;
  color: #505050;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  /*border: 1px solid #ad8225;*/
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #505050 transparent transparent transparent;
}

.custom-select .items {
  color: #505050;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #dedee0;
  border-left: 1px solid #dedee0;
  border-bottom: 1px solid #dedee0;
  position: absolute;
  background-color: #f9fafb;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #505050;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: $white-d;
}

.selectHide {
  display: none;
}

$background: lightcoral;
$easing: cubic-bezier(.25,1.7,.35,.8);
$duration: 0.5s;

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.arrow-icon {
  display:block;
  position: relative;
  cursor: pointer;
}

.left-bar {
  position: absolute;
  background-color: transparent;
  top: 0;
  left:0;
  width: 40px;
  height: 10px;
  display: block;
  transform: rotate(35deg);
  float: right;

  &:after {
    content:"";
    background-color: #505050;
    width: 40px;
    height: 10px;
    display: block;
    float: right;
    transition: all $duration $easing;
    z-index: -1;
  }
}

.right-bar {
  position: absolute;
  background-color: transparent;
  top: 0px;
  left:26px;
  width: 40px;
  height: 10px;
  display: block;
  transform: rotate(-35deg);
  float: right;

  &:after {
    content:"";
    background-color: #505050;
    width: 40px;
    height: 10px;
    display: block;
    float: right;
    transition: all $duration $easing;
    z-index: -1;
  }
}

.open {
  .left-bar:after {
    transform-origin: center center;
    transform: rotate(-70deg);
  }
  .right-bar:after {
    transform-origin: center center;
    transform: rotate(70deg);
  }

}
</style>
