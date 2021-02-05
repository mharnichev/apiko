<template>
  <section class="ms">
    <custom-wrapper :size="'large'" class="ms__container">
      <div class="ms__categories">
        <custom-selector
            :options="['cheap', 'hot offer', 'expensive']"
            :default="'Pick category'"
            class="select"
            @input="alert(displayToKey($event))"
        />
      </div>
      <div class="ms__cost">

      </div>
    </custom-wrapper>
  </section>
</template>

<script>
import CustomWrapper from "@/components/elements/custom-wrapper";
import CustomSelector from "@/components/elements/custom-selector";

export default  {
  name: "main-search",
  components: {
    CustomWrapper,
    CustomSelector
  },
}
</script>

<style scoped lang="scss">
.ms {
  &__categories {
    padding: 12px 0;
  }
}
</style>