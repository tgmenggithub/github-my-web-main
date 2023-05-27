<template>
    <div>
        <div class="cards-list">
            <div class="card" v-for="(card, index) in cards" :key="index">
                <div class="card_image">
                    <img :src="card.image" />
                </div>
                <div class="card_title" :class="card.titleClass">
                    <p>{{ card.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Component2ProductMy",
    components: {},
    data() {
        return {
            cards: [
                {
                    image: "https://freight.cargo.site/w/1024/i/ade715581e7533554249adf217361ca30f527701ec402edd68c612055818f20a/infinite_text_v3.gif",
                    title: "Midjourney",
                    titleClass: "title-white"
                },
                {
                    image: "https://i.gifer.com/origin/da/dac535ed5a20a1eef613e265f195505f_w200.gif",
                    title: "ChatGPT Plus",
                    titleClass: "title-white"
                },
                {
                    image: "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
                    title: "GitHub学生包",
                    titleClass: "title-white"
                },
                {
                    image: "https://media4.giphy.com/media/IWiAPmq1HS9QZRu8PT/200w.gif",
                    title: "Jetbrains全家桶",
                    titleClass: "title-white"
                },
            ]
        };
    },
    methods: {},
    computed: {}
}
</script>

<style scoped lang="scss">
.cards-list {
  z-index: 0;
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
}

.card {
  margin: 2rem 2rem;
  width: 12rem;
  height: 12rem;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 23px;
  margin-top: -80px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25),
  -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}


/*
.card {
margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  background-image: url('https://i.redd.it/b3esnz5ra34y.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  transition: 0.4s;
}
*/
</style>