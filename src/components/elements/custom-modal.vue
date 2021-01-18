<template>
  <portal to="modal">
    <transition name="fade">
      <div v-if="isOpen" class="custom-modal__wrapper">
        <div class="custom-modal__overlay" @click="close()"></div>
        <div class="custom-modal">
          <a  class="close" @click="close()"></a>
          <slot></slot>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script lang="ts">
export default  {
  props: ['portal', 'isOpen', 'to', 'close'],
  methods: {
    handleClose() {
      this.close();
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";

.custom-modal {
  position: relative;
  z-index: 100;
  display: inline-block;
  box-sizing: border-box;
  max-width: 80%;
  margin: 20px 0;
  padding: 100px;
  font-size: 1rem;
  line-height: 1.3;
  letter-spacing: normal;
  white-space: normal;
  vertical-align: middle;
  background-color: $white-d;
  user-select: text;
  border: 1px solid #E4E4E4;
  border-radius: 4px;

  &__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999999;
    display: block;
    box-sizing: border-box;
    padding: 0 12px;
    overflow: auto;
    font-size: 1px;
    line-height: 0;
    letter-spacing: -1em;
    white-space: nowrap;
    text-align: center;
    user-select: none;

    &::before {
      display: inline-block;
      width: 0.1px;
      height: 100%;
      vertical-align: middle;
      content: "";
    }

    &.video {
      > .modal {
        width: 100%;
      }
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: #000;
    opacity: 0.5;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 480px;
    padding: 32px 16px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;

    &__wrapper {
      padding: 0;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  transition: opacity 0.4s ease-out;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

</style>
