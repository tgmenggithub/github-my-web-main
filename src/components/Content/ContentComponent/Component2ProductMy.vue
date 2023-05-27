<template>
    <div>
        <div class="cards-list">
            <div class="card" v-for="(card, index) in cards" :key="index">
                <a :href="card.targetUrl" target="_blank" style="height: 100%;width: 100%">
                    <div class="card_image">
                        <img :src="card.image"/>
                    </div>
                    <div class="card_title" :class="card.titleClass">
                        <p>{{ card.title }}</p>
                    </div>
                </a>
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
                    image: `${require('@/assets/main/gif/Midjourney.gif')}`,
                    title: "Midjourney",
                    titleClass: "title-white",
                    targetUrl: "https://chat.anybodyai.com"
                },
                {
                    image: `${require('@/assets/main/gif/ChatGPTPlus.gif')}`,
                    title: "ChatGPT Plus",
                    titleClass: "title-white",
                    targetUrl: "https://chat.anybodyai.com"
                },
                {
                    image: "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
                    title: "GitHub学生包",
                    titleClass: "title-white",
                    targetUrl: "https://githubedu.com"
                },
                {
                    image: `${require('@/assets/main/gif/Jetbrains.gif')}`,
                    title: "Jetbrains全家桶",
                    titleClass: "title-white",
                    targetUrl: "https://githubedu.com/jetbrains"
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
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
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
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
  -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
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