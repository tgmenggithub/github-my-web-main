<template>
    <div>
        <div class="cards-list">
            <div class="card">
                <a href="javascript:void(0);" style="height: 100%;width: 100%">
                    <div class="card_image">
                        <img src="https://public-1305951218.cos.ap-shanghai.myqcloud.com/shouhou/copilot/shouhouqun.jpg"/>
                    </div>
                    <div class="card_title title-white">
                        <p>进售后群,享受优惠</p>
                    </div>
                </a>
            </div>

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
                // {
                //     image: "https://my-main-web-1305951218.cos.ap-shanghai.myqcloud.com/gif/Gift.gif",
                //     // image: `${require('@/assets/main/gif/Copilot.gif')}`,
                //     title: "福利产品",
                //     titleClass: "title-white",
                //     targetUrl: "https://shop.tgmeng.com"
                // },
                {
                    image: "https://my-main-web-1305951218.cos.ap-shanghai.myqcloud.com/gif/Copilot.gif",
                    // image: `${require('@/assets/main/gif/Copilot.gif')}`,
                    title: "Copilot授权",
                    titleClass: "title-white",
                    targetUrl: "https://shop.tgmeng.com"
                },
                {
                    image: "https://my-main-web-1305951218.cos.ap-shanghai.myqcloud.com/gif/Jetbrains.gif",
                    // image: `${require('@/assets/main/gif/Jetbrains.gif')}`,
                    title: "Jetbrains全家桶",
                    titleClass: "title-white",
                    targetUrl: "https://shop.tgmeng.com"
                },
                // {
                //     image: "https://my-main-web-1305951218.cos.ap-shanghai.myqcloud.com/gif/GitHubStudentPack.gif",
                //     // image: `${require('@/assets/main/gif/GitHubStudentPack.gif')}`,
                //     title: "GitHub学生包",
                //     titleClass: "title-white",
                //     targetUrl: "https://githubedu.com"
                // },
                {
                    image: "https://my-main-web-1305951218.cos.ap-shanghai.myqcloud.com/gif/ChatGPTPlus.gif",
                    // image: `${require('@/assets/main/gif/ChatGPTPlus.gif')}`,
                    title: "Chat GPT",
                    titleClass: "title-white",
                    targetUrl: "https://bot.tgmeng.com"
                },
                {
                    image: "https://my-main-web-1305951218.cos.ap-shanghai.myqcloud.com/gif/Midjourney.gif",
                    // image: `${require('@/assets/main/gif/Midjourney.gif')}`,
                    title: "Midjourney",
                    titleClass: "title-white",
                    targetUrl: "https://bot.tgmeng.com/drawer"
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
  margin-top: 5px;
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
</style>