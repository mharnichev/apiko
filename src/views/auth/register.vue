<template>
  <div>
    <div>
      <custom-wrapper :title="'Register'" class="registration">
        <form class="registration__input-wrapper" action="#" @submit.prevent="submit">
          <custom-input
              :label="'email'"
              :title="'email'"
              :input-id="'email'"
              type="email"
              name="email"
              v-validate="'required|email'"
              :placeholder="'Enter your email'"
              :class="{'is-danger': errors.has('name') }"
              v-model="form.email"
          >
            <p class="error-text">{{ errors.first('email') }}</p>
          </custom-input>
          <custom-input
              :label="'name'"
              :title="'full name'"
              :input-id="'name'"
              type="name"
              name="name"
              :placeholder="'Enter your full name'"
              v-model="form.name"
          >
            <p class="error-text">{{ errors.first('name') }}</p>
          </custom-input>
          <custom-input
              :label="'password'"
              :title="'Password'"
              :input-id="'password'"
              type="password"
              name="password"
              :placeholder="'Enter your password'"
              v-validate="'required|min:6'"
              v-model="form.password"
              ref="password"
          >
            <p class="error-text">{{ errors.first('password') }}</p>
          </custom-input>
          <custom-input
              :label="'password'"
              :title="'repeat password'"
              type="password"
              name="confirmation"
              :placeholder="'Repeat password'"
              v-model="form.confirmation"
              v-validate="'required|confirmed:password'"
              data-vv-as="password"
          >
            <p class="error-text">{{ errors.first('confirmation') }}</p>
          </custom-input>
          <custom-button :type="'submit'" :text="'Continue'" />
        </form>
      </custom-wrapper>

      <custom-wrapper class="registration__reg">
        <p class="registration__register-text">I already have an account, <a href="/log-in">LOG IN</a></p>
      </custom-wrapper>
<!--      <Form></Form>-->
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import CustomWrapper from "@/components/elements/custom-wrapper";
import CustomInput from "@/components/elements/custom-input";
import CustomButton from "@/components/elements/custom-button.vue";

export default {
  components: {
    CustomWrapper,
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmation: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            data.user
                .updateProfile({
                  displayName: this.form.name
                })
                .then(() => {
                  this.$router.push('/');
                });
          })
          .catch(err => {
            console.log('err registration', err);
            this.error = err.message;
            this.$router.push('/');
          });
    }
  },
  computed: {
    showInner() {
      return this.form.name;
    }
  }
};
</script>


<style scoped lang="scss">
@import "src/assets/styles/variables";

.registration {
  margin-top: 60px;

  &__reg {
    margin: 20px 0 200px;

    @include for-middle() {
      margin-bottom: 30px;
    }
  }

  &__input-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 377px;
    margin: 0 auto;
  }

  &__register-container {
    margin-top: 20px;
  }

  &__register-text {
    color: $dark-d;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    padding: 30px 0;

    a {
      color: $green-d;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
}
</style>