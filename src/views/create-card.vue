<template>
  <div>
    <custom-wrapper :title="'Add product'" class="create-card" :size="'large'">
      <form class="create-card__input-wrapper" action="#" @submit.prevent="submit">
        <custom-input
            :label="'title'"
            :title="'title'"
            :input-id="'title'"
            type="text"
            :placeholder="'For example: your dream place'"
            v-model="form.email"
        ></custom-input>
        <custom-input
            :label="'location'"
            :title="'location'"
            :input-id="'location'"
            type="text"
            :placeholder="'For example: Los Angeles, CA'"
            v-model="form.location"
        ></custom-input>
          <custom-textarea
              :title="'description'"
              :label="'description'"
              :input-id="'description'"
              :placeholder="'Whats new?'"
              v-model="form.description"
          ></custom-textarea>
        <custom-downloader :title="'photos'" />
        <custom-input
            :label="'location'"
            :title="'location'"
            :input-id="'location'"
            type="number"
            :placeholder="'For example: Los Angeles, CA'"
            v-model="form.price"
        ></custom-input>
        <custom-button class="create-card__btn" type="submit" :text="'Continue'" />
      </form>
    </custom-wrapper>
  </div>
</template>

<script>
import firebase from "firebase";
import CustomButton from "@/components/elements/custom-button.vue";
import CustomWrapper from "@/components/elements/custom-wrapper";
import CustomInput from "@/components/elements/custom-input";
import CustomTextarea from "@/components/elements/custom-textarea";
import CustomDownloader from "@/components/elements/custom-downloader";


export default {
  components: {
    CustomButton,
    CustomWrapper,
    CustomInput,
    CustomTextarea,
    CustomDownloader
  },
  data() {
    return {
      form: {
        email: "",
        location: "",
        description: "",
      },
      error: null
    };
  },
  methods: {
    submit() {
      console.log(this.form.email, this.form.location, this.form.description);
      // firebase
      //     .auth()
      //     .signInWithEmailAndPassword(this.form.email, this.form.password)
      //     .then(data => {
      //       this.$router.replace({ name: "Dashboard" });
      //     })
      //     .catch(err => {
      //       this.error = err.message;
      //     });
    }
  }
};
</script>


<style scoped lang="scss">
@import "src/assets/styles/variables";

.create-card {
  margin: 60px 0 100px 0;

  &__reg {
    margin-top: 20px;
  }

  &__input-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 664px;
    margin: 0 auto;
    align-items: center;
  }
}

.create-card__btn {
  margin: 2rem 0;
}
</style>