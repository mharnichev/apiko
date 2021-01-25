<template>
  <section class="g-page">
   <div class="g-page__container custom-container">
      <main-search />
     <div class="g-page__cards-container">
       <main-cards
           v-for="(item, i) in cardList"
           :key="i"
           :card="item"
           @click="showModal(item)"
       >
         <custom-favorite @click="addToFavorite()" :card-favorite="true" class="card__favorite" />
       </main-cards>

       <custom-modal :is-open="isShowModal" :close="closeModal" >
         <div class="cr__modal">

           <pre>{{dataModalCard}}</pre>

<!--           <div class="cr__modal-container container">-->
<!--             <img width="278" height="320"  v-if="dataModalCard.img" class="cr__modal-left" :src="dataModalCard.img" :alt="dataModalCard.alt" />-->
<!--             <div class="cr__modal-right">-->
<!--               <div class="cr__modal-right_title">-->
<!--                 {{dataModalCard.title}}-->
<!--               </div>-->
<!--               <div class="cr__modal-right_subtitle">-->
<!--                 {{dataModalCard.position}}-->
<!--               </div>-->
<!--               <div class="cr__modal-right_desc">-->
<!--                 {{dataModalCard.desc}}-->
<!--               </div>-->
<!--             </div>-->
<!--           </div>-->

         </div>
       </custom-modal>
     </div>

   </div>
  </section>
</template>

<script>
import firebase from "firebase";
import MainCards from "@/components/main/main-cards";
import CustomModal from "@/components/elements/custom-modal";
import CustomFavorite from "@/components/elements/custom-favorite";
import MainSearch from "@/components/main/main-search";

export default {
  name: 'Home',
  components: {
    MainCards,
    CustomModal,
    CustomFavorite,
    MainSearch
  },
  data() {
    return {
      isShowModal: false,
      isCloseModal: true,
      dataModalCard: {
        type: Object,
        default: {}
      },
      fbCards: null,
      cardList: [
        {
          title: 'USA',
          cost: 300,
          desc: 'dljfndkshjfgnljf kgmlsdkmfl',
          location: 'San Francisco',
        },
        {
          title: 'Canada',
          cost: 400 ,
          desc: 'dljfndkshjfgnljf kgmlsdkmfl',
          location: 'San Francisco',
        },
        {
          title: 'Ukraine',
          cost: 100 ,
          desc: 'dljfndkshjfgnljf kgmlsdkmfl',
          location: 'San Francisco',
        },
        {
          title: 'China',
          cost: 450 ,
          desc: 'dljfndkshjfgnljf kgmlsdkmfl',
          location: 'San Francisco',
        },
        {
          title: 'United Kingdom',
          cost: 600 ,
          desc: 'dljfndkshjfgnljf kgmlsdkmfl',
          location: 'San Francisco',
        },
      ],
    }
  },
  methods: {
    showModal(item) {
      console.log(item);
      this.dataModalCard = item;
      this.isShowModal = true;
    },
    closeModal() {
      this.dataModalCard = {};
      return this.isShowModal = false;
    },
    addToFavorite() {
      console.log('lol')
    }
  },
  created() {

    const db = firebase.database();
    const ref = db.ref("cards/");

    try {
      ref.on("value", (snapshot) => {
        console.log(snapshot.val());
        this.fbCards = Object.values(snapshot.val());
        console.log('fbCards 1234', this.fbCards);
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    } catch (e) {
      console.log('add card', e);
    }

    // console.log(this.fbCards);

    // this.addCards();
    // this.fbCards = this.addCards();
    // console.log(this.fbCards);


  },
  // addCards() {
  //
  // }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.g-page {
  &__container.custom-container {
    max-width: 920px;
  }

 &__cards-container {
   display: flex;
   flex: 1 1 auto;
   flex-wrap: wrap;
 }
}
</style>
