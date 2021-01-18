<template>
  <div class="custom-input">
    <label class="custom-input__label" :for="label" v-if="label && title">
      {{title}}
    </label>
    <input
        v-if="type !== 'password'"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :id="inputId ? inputId : null"
        :name="name"
        class="custom-input__input"
        @input="validateForm($event.target.value)"
    >
    <div v-else class="custom-input__password">
      <span @click="showPass" :class="['custom-input__eye', {'active': isShowPassword}]"></span>
      <input
        :type="!isShowPassword ? type : 'text'"
        :placeholder="placeholder"
        :value="value"
        :id="inputId ? inputId : null"
        :name="name"
        class="custom-input__input"
        @input="validateForm($event.target.value)"
      >
    </div>
    <slot></slot>
  </div>
</template>

<script>


export default {
  data() {
    return {
      isShowPassword: false,
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
    },
    successMessage: {
      type: String,
      default: "",
    },
    name: {
      type: String,
    }
  },
  methods: {
    validateForm(value) {
      this.$emit("input", value);
    },
    showPass() {
      this.isShowPassword = !this.isShowPassword;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.custom-input {
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
    padding: 0 0 4px;
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
    transition: all 0.4s ease-out;
  }

  &__password {
    position: relative;
  }

  &__eye {
    content: "";
    width: 24px;
    height: 15px;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    right: 5%;
    top: 25%;
    transform: translateY(50%);
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z' fill='black'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    transition: background 0.4s ease-out;

    &:hover {
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M23.352 7.14401C20.852 3.26501 16.607 0.949005 12 0.949005C7.39298 0.949005 3.14898 3.26501 0.647979 7.14401C0.312979 7.66501 0.312979 8.33601 0.647979 8.85701C3.14898 12.735 7.39298 15.051 12 15.051C16.607 15.051 20.852 12.735 23.352 8.85701C23.688 8.33601 23.688 7.66401 23.352 7.14401ZM22.344 8.20601C20.065 11.741 16.198 13.851 12 13.851C7.80198 13.851 3.93598 11.741 1.65698 8.20601C1.57698 8.08301 1.57698 7.91701 1.65698 7.79401C3.93598 4.25901 7.80198 2.14901 12 2.14901C16.198 2.14901 20.064 4.25901 22.344 7.79401C22.423 7.91701 22.423 8.08301 22.344 8.20601ZM8.39998 8C8.39998 6.01501 10.015 4.40001 12 4.40001C13.985 4.40001 15.6 6.01501 15.6 8C15.6 9.98501 13.985 11.6 12 11.6C10.015 11.6 8.39998 9.98501 8.39998 8Z' fill='black'/%3E%3C/svg%3E%0A");
    }

    &.active {
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M23.352 7.14401C20.852 3.26501 16.607 0.949005 12 0.949005C7.39298 0.949005 3.14898 3.26501 0.647979 7.14401C0.312979 7.66501 0.312979 8.33601 0.647979 8.85701C3.14898 12.735 7.39298 15.051 12 15.051C16.607 15.051 20.852 12.735 23.352 8.85701C23.688 8.33601 23.688 7.66401 23.352 7.14401ZM22.344 8.20601C20.065 11.741 16.198 13.851 12 13.851C7.80198 13.851 3.93598 11.741 1.65698 8.20601C1.57698 8.08301 1.57698 7.91701 1.65698 7.79401C3.93598 4.25901 7.80198 2.14901 12 2.14901C16.198 2.14901 20.064 4.25901 22.344 7.79401C22.423 7.91701 22.423 8.08301 22.344 8.20601ZM8.39998 8C8.39998 6.01501 10.015 4.40001 12 4.40001C13.985 4.40001 15.6 6.01501 15.6 8C15.6 9.98501 13.985 11.6 12 11.6C10.015 11.6 8.39998 9.98501 8.39998 8Z' fill='black'/%3E%3C/svg%3E%0A");
    }


    //right: 0;
    //top: -50%;
    //transform: translate(50%);
    //width: 24px;
    //height: 14px;

    //background-image: url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z' fill='black'/%3E%3C/svg%3E%0A");

    //transition: background 0.4s ease-out;
    //
    //&:hover {
    //  background-image: url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M23.352 7.14401C20.852 3.26501 16.607 0.949005 12 0.949005C7.39298 0.949005 3.14898 3.26501 0.647979 7.14401C0.312979 7.66501 0.312979 8.33601 0.647979 8.85701C3.14898 12.735 7.39298 15.051 12 15.051C16.607 15.051 20.852 12.735 23.352 8.85701C23.688 8.33601 23.688 7.66401 23.352 7.14401ZM22.344 8.20601C20.065 11.741 16.198 13.851 12 13.851C7.80198 13.851 3.93598 11.741 1.65698 8.20601C1.57698 8.08301 1.57698 7.91701 1.65698 7.79401C3.93598 4.25901 7.80198 2.14901 12 2.14901C16.198 2.14901 20.064 4.25901 22.344 7.79401C22.423 7.91701 22.423 8.08301 22.344 8.20601ZM8.39998 8C8.39998 6.01501 10.015 4.40001 12 4.40001C13.985 4.40001 15.6 6.01501 15.6 8C15.6 9.98501 13.985 11.6 12 11.6C10.015 11.6 8.39998 9.98501 8.39998 8Z' fill='black'/%3E%3C/svg%3E%0A");
    //}
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-input.is-danger {
  .custom-input__input {
    border-color: #ff0202;
  }
}
</style>