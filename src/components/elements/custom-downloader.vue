<template>
  <div class="custom-downloader">
    <input type="file" ref="file" @change="uploadImg" multiple id="files" name="files[]" >

<!--    <p class="custom-downloader__title" v-if="title">-->
<!--      {{title}}-->
<!--    </p>-->

<!--    <div class="custom-downloader__inner">-->
<!--      <svg-->
<!--          class="custom-downloader__inner-btn"-->
<!--          @click="doSmothing"-->
<!--          width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--        <rect width="92" height="92" rx="4" fill="#E4E4E4"/>-->
<!--        <rect x="44" y="27" width="4" height="38" rx="2" fill="#349A89"/>-->
<!--        <rect x="27" y="48" width="4" height="38" rx="2" transform="rotate(-90 27 48)" fill="#349A89"/>-->
<!--      </svg>-->
<!--    </div>-->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      file: ''
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
  },
  methods: {
    doSmothing(event) {
      // this.$firebaseStorageRef.child()
      console.log('hi', event);
    },
    uploadImg() {
      const storageRef = firebase.storage().ref();

      this.file = this.$refs.file.files[0];

      let imagesRef = storageRef.child('images');

      imagesRef.put(this.file).then(function(snapshot) {
        alert("File Uploaded")
        console.log('Uploaded a blob or file!');
      });

      // let fileName = 'space.jpg';
      // const spaceRef = imagesRef.child(fileName); // thisRef
      // const path = spaceRef.fullPath
      // const name = spaceRef.name
      // imagesRef = spaceRef.parent;
      //
      // spaceRef.put(this.file).then(function(snapshot) {
      //   alert("File Uploaded")
      //   console.log('Uploaded a blob or file!');
      // });
    }
  },

}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.custom-downloader {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  &__title {
    font-size: 12px;
    line-height: 14px;
    color: #282828;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    padding: 0 0 4px;
  }

  &__inner {
    border-radius: 5px;
    background-color: #F9FAFB;
    border: 1px solid #DEDEE0;
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    color: #002a40;
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.2px;
    outline: none;
  }
}

</style>