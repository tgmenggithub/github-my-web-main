<template>
    <div class="main">
        <div class="cards-list">
            <div class="card" v-for="(card, index) in cards" :key="index">
                <div class="card_image">
                    <img :src="card.image"/>
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
    name: "Contact",
    components: {},
    data() {
        return {
            cards: [
                {
                    image: "https://github-edu-student-id-card-basic-1305951218.cos.ap-shanghai.myqcloud.com/shouhou.jpg",
                    title: "进售后群，永不失联",
                    titleClass: "title-white"
                },
                // {
                //     image: "https://i.gifer.com/origin/da/dac535ed5a20a1eef613e265f195505f_w200.gif",
                //     title: "售后客服",
                //     titleClass: "title-white"
                // }
            ]
        };
    },
    methods: {},
    mounted() {
    },
    beforeUnmount() {
    },

}
</script>

<style scoped>
.main{
    margin-top: 10rem;
    margin-bottom: 5rem;
}

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
    width: 20rem;
    //height: 12rem;
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
    margin-top: 2rem;
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
</style>