<template>
  <div class="card" >
    <div @click="$emit('click', $event)" class="card-wrapper">
      <img  class="card__img" src="/bg-c.png" />
      <p class="card__title">{{ card.title }}</p>
      <h3 class="card__cost">${{card.cost}}</h3>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {}
  },
  props: [ 'card'],
  created() {},
  methods: {

  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.card {
  position: relative;
 max-width: 208px;
  width: 100%;
  background-color: $white-d;
  border-radius: 4px;
  margin: 0 6px 10px 6px;
  box-shadow: 0px 4px 14px rgba(121, 121, 121, 0.0527344);
  border: 1px solid #E4E4E4;
  cursor: pointer;
  transition: all 0.4s ease-out;

  &:hover {
    box-shadow: 4px 4px 20px 1px rgba(121, 121, 121, 0.21);
  }
  
  &-wrapper {
    position: relative;
  }

  &__img {
    margin: 3px;
  }

  &__title {
    font-size: 15px;
    color: $dark-d;
    padding: 3px 12px 6px 12px;
  }

  &__cost {
    padding: 0px 12px 10px 12px;
  }

  &__favorite {
    position: absolute;
    right: 0;
    bottom: 52px;
  }
}
</style>