<template>
  <div>
    <custom-wrapper :title="'Add product'" class="create-card" :size="'large'">
      <form class="create-card__input-wrapper" action="#" @submit.prevent="addCard">
        <custom-input
            :label="'title'"
            :title="'title<span>*</span>'"
            :input-id="'title'"
            type="text"
            :placeholder="'For example: your dream place'"
            v-model="form.title"
            name="title"
            v-validate="'required|min:2'"
        >
          <p class="error-text">{{ errors.first('title') }}</p>
        </custom-input>
        <custom-input
            :label="'location'"
            :title="'location<span>*</span>'"
            :input-id="'location'"
            type="text"
            :placeholder="'For example: Los Angeles, CA'"
            v-model="form.location"
            name="location"
            v-validate="'required|min:2'"
        >
          <p class="error-text">{{ errors.first('location') }}</p>
        </custom-input>
        <custom-textarea
            :title="'description'"
            :label="'description'"
            :input-id="'description'"
            :placeholder="'Whats new?'"
            v-model="form.description"
        ></custom-textarea>
        <custom-downloader @addFile="checkImg" :title="'photos'"/>
        <custom-input
            :label="'price'"
            :title="'price<span>*</span>'"
            :input-id="'price'"
            type="number"
            name="price"
            :placeholder="'For example: 100$'"
            v-model="form.price"
            v-validate="'required|min:2'"
        >
          <p class="error-text">{{ errors.first('price') }}</p>
        </custom-input>
        <custom-button class="create-card__btn" type="submit" :text="'Continue'"/>
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
        title: "",
        location: "",
        description: "",
        price: "",
        card: {},
        upLoadImg: null,
      },
      error: null,
      testMest: false
    };
  },
  methods: {
    checkImg(img) {
      this.upLoadImg = img;
    },
    addCard() {
      if (this.upLoadImg) {
        const storageRef = firebase.storage().ref();
        const imagesRef = storageRef.child(`images/${this.upLoadImg.name}`);
        // imgUrl = imagesRef;

        storageRef.child(`images/${this.upLoadImg.name}`).getDownloadURL()
            .then((url) => {
              // `url` is the download URL for 'images/stars.jpg'

              // This can be downloaded directly:
              const xhr = new XMLHttpRequest();
              xhr.responseType = 'blob';
              xhr.onload = (event) => {
                const blob = xhr.response;
              };
              xhr.open('GET', url);
              xhr.send();

              // Or inserted into an <img> element
              const img = document.getElementById('myimg');
              img.setAttribute('src', url);
            })
            .catch((error) => {
              // Handle any errors
            });



        console.log('imagesRef', imagesRef);
      }



      this.$validator.validate().then((result) => {
        let imgUrl;

        if (result) {
          if (this.upLoadImg) {
            const storageRef = firebase.storage().ref();
            const imagesRef = storageRef.child(`images/${this.upLoadImg.name}`);
            imgUrl = imagesRef;

            console.log('imagesRef', imagesRef);



            // imagesRef.put(this.file).then(function(snapshot) {
            //   console.log(snapshot);
            // });
          }


          const db = firebase.database();
          const ref = db.ref("cards/");

          const ID = function () {
            return Math.random().toString(36).substr(2, 10);
          };

          let listKey = ID();
          const cardsRef = ref.child("item");
          const actualDate = new Date().toLocaleString().split(',');

          try {
            this.card = {
              title: this.form.title,
              location: this.form.location,
              description: this.form.description ? this.form.description : "",
              price: this.form.price,
              id: ID(),
              key: listKey,
              date: actualDate[0],
              time: actualDate[1]
            };

            cardsRef.update({
              title: this.card.title,
              location: this.card.location,
              description: this.card.description,
              price: this.card.price,
              id: this.card.id,
              key: this.card.key,
              date: this.card.date,
              time: this.card.time
            });
          } catch (e) {
            console.log('create card is fail', e);
          }
        }
      });
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