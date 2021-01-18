<template>
  <div>
    <custom-wrapper :title="'Login'" class="login">
      <form class="login__input-wrapper" action="#" @submit.prevent="validateBeforeSubmit">
        <custom-input
            :label="'email'"
            :title="'email'"
            :input-id="'email'"
            type="email"
            name="email"
            :placeholder="'Enter your email'"
            v-model="form.email"
            v-validate="'required|email'"
            :class="{'is-danger': errors.has('email') }"
        >
          <p class="error-text">{{ errors.first('email') }}</p>
        </custom-input>

        <custom-input
            :label="'password'"
            :title="'Password'"
            :input-id="'password'"
            v-validate="'required|min:6'"
            type="password"
            name="password"
            :placeholder="'Enter your password'"
            v-model="form.password"
            :class="{'is-danger': errors.has('password') }"
        >
          <p class="error-text">{{ errors.first('password') }}</p>
        </custom-input>

        <a class="login__input-remember">Don’t remember password?</a>

        <custom-button type="submit" :text="'Continue'"/>
      </form>
    </custom-wrapper>

    <custom-wrapper class="login__reg">
      <p class="login__register-text">I have no account, <a href="/registration">REGISTER NOW</a></p>
    </custom-wrapper>

  </div>
</template>

<script>
import firebase from "firebase";
import CustomButton from "@/components/elements/custom-button.vue";
import CustomWrapper from "@/components/elements/custom-wrapper";
import CustomInput from "@/components/elements/custom-input";
import store from "@/store";


export default {
  components: {
    CustomButton,
    CustomWrapper,
    CustomInput,
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      message: "",
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validate().then((result) => {
        if (result) {
          this.submit();
        }
      });
    },
    submit() {
      firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            store.dispatch("fetchUser", data.user);
            this.$router.replace({name: "Home"});
          })
          .catch(err => {
            console.log('login ', err);
            this.error = err.message;
          });
    },
  },
};
</script>


<style scoped lang="scss">
@import "src/assets/styles/variables";

.login {
  margin-top: 60px;

  &__reg {
    margin-top: 20px;
  }

  &__input-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 377px;
    margin: 0 auto;
  }

  &__input-remember {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #8C8C8C;
    padding-top: 5px;
    display: flex;
    justify-content: flex-end;
  }

  &__register-container {
    margin: 20px 0 200px;

    @include for-middle() {
      margin-bottom: 30px;
    }
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

//.is-danger {
//  background-color: red;
//}
</style>