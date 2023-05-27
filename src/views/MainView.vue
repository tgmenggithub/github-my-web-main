<template>
    <div>
        <div class="layout">
            <HeaderComponent></HeaderComponent>
            <ContactView v-if="isConnect"></ContactView>
            <ContentComponent v-else></ContentComponent>
            <FooterComponent></FooterComponent>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import ContentComponent from "@/components/Content/ContentComponent.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import ContactView from "@/views/ContactView.vue";

export default {
    name: "Main",
    components: {HeaderComponent, ContentComponent, FooterComponent, ContactView},
    data() {
        return {
            locationIsContact: location.href.endsWith('contact') || location.href.endsWith('contact/')
        };
    },
    methods: {},
    mounted() {
    },
    beforeUnmount() {
    },
    computed: {
        isConnect() {
            return this.$store.state.isConnect
        }
    }
}
</script>

<style>
@font-face {
    font-weight: 400;
    font-family: "Alliance No.1";
    font-style: normal;
    src: url(../assets/main/fonts/Alliance-No-1-Regular.3e4945e.woff) format("woff");
    font-feature-settings: "salt" 2;
    font-display: swap
}

@font-face {
    font-weight: 500;
    font-family: "Alliance No.1";
    font-style: normal;
    src: url(../assets/main/fonts/Alliance-No-1-Medium.4f88494.woff) format("woff");
    font-display: swap
}

@font-face {
    font-weight: 600;
    font-family: "Alliance No.1";
    font-style: 600;
    src: url(../assets/main/fonts/Alliance-No-1-Semibold.93f0cc8.woff) format("woff");
    font-display: swap
}

@font-face {
    font-weight: 700;
    font-family: "Alliance No.1";
    font-style: normal;
    src: url(../assets/main/fonts/Alliance-No-1-Bold.9b734b4.woff) format("woff");
    font-display: swap
}

@font-face {
    font-weight: 800;
    font-family: "Alliance No.1";
    font-style: normal;
    src: url(../assets/main/fonts/Alliance-No-1-ExtraBold.cf72641.woff) format("woff");
    font-display: swap
}

*, :after, :before {
    box-sizing: border-box
}

img {
    max-width: 100%;
    height: auto
}

html {
    font-size: 16px
}

body {
    margin: 0;
    color: #8b949e;
    font-size: var(--fs-base);
    font-family: "Alliance No.1", sans-serif;
    line-height: 1.4;
    background-color: #0d1117;
    font-feature-settings: "salt" 2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

a {
    color: #fff;
    text-decoration: none
}

.container {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem
}

.layout {
    width: 100%;
    overflow-x: hidden
}

:root {
    --fs-xsmall: 14px;
    --fs-small: 16px;
    --fs-base: 16px;
    --fs-h4: 24px;
    --fs-h3: 24px;
    --fs-h2: 28px;
    --fs-h1: 40px
}

@media (min-width: 768px) {
    :root {
        --fs-xsmall: 14px;
        --fs-small: 16px;
        --fs-base: 20px;
        --fs-h4: 24px;
        --fs-h3: 32px;
        --fs-h2: 48px;
        --fs-h1: 72px
    }
}

p {
    margin-top: 0;
    margin-bottom: 1em
}

.h1 {
    margin-bottom: 2rem;
    font-size: var(--fs-h1);
    line-height: 1.05
}

.h1, .h2 {
    margin-top: 0;
    color: #fff;
    font-weight: 800
}

.h2 {
    margin-bottom: 1rem;
    font-size: var(--fs-h2);
    line-height: 1.08
}

.h3 {
    font-weight: 700;
    font-size: var(--fs-h3);
    line-height: 1.125
}

.h3, .h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #fff
}

.h4 {
    font-weight: 600;
    font-size: var(--fs-h4);
    line-height: 1.166
}

.fs-base {
    font-size: var(--fs-base)
}

.fs-small {
    font-size: var(--fs-small)
}

.fs-xsmall {
    font-size: var(--fs-xsmall)
}

code[class*=language-], pre[class*=language-] {
    color: #000;
    background: 0 0;
    text-shadow: 0 1px #fff;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none
}

code[class*=language-] ::selection, code[class*=language-]::selection, pre[class*=language-] ::selection, pre[class*=language-]::selection {
    text-shadow: none;
    background: #b3d4fc
}

@media print {
    code[class*=language-], pre[class*=language-] {
        text-shadow: none
    }
}

pre[class*=language-] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto
}

:not(pre) > code[class*=language-], pre[class*=language-] {
    background: #f5f2f0
}

:not(pre) > code[class*=language-] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal
}

.token.cdata, .token.comment, .token.doctype, .token.prolog {
    color: #708090
}

.token.punctuation {
    color: #999
}

.token.namespace {
    opacity: .7
}

.token.boolean, .token.constant, .token.deleted, .token.number, .token.property, .token.symbol, .token.tag {
    color: #905
}

.token.attr-name, .token.builtin, .token.char, .token.inserted, .token.selector, .token.string {
    color: #690
}

.language-css .token.string, .style .token.string, .token.entity, .token.operator, .token.url {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, .5)
}

.token.atrule, .token.attr-value, .token.keyword {
    color: #07a
}

.token.class-name, .token.function {
    color: #dd4a68
}

.token.important, .token.regex, .token.variable {
    color: #e90
}

.token.bold, .token.important {
    font-weight: 700
}

.token.italic {
    font-style: italic
}

.token.entity {
    cursor: help
}

.nuxt-progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 0;
    opacity: 1;
    transition: width .1s, opacity .4s;
    background-color: #000;
    z-index: 999999
}

.nuxt-progress.nuxt-progress-notransition {
    transition: none
}

.nuxt-progress-failed {
    background-color: red
}

.navigation[data-v-83148ee2] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-size: var(--fs-small)
}

.logo-wrapper[data-v-70116428] {
    display: flex;
    gap: .5rem;
    align-items: center;
    color: #fff;
    font-weight: 800;
    font-size: 24px
}

.logo[data-v-70116428] {
    width: 31px;
    height: 31px
}

.menu-desktop[data-v-100aafa2] {
    display: none;
    align-items: center;
    font-weight: 600
}

@media (min-width: 1012px) {
    .menu-desktop[data-v-100aafa2] {
        display: flex
    }
}

.menu-desktop > [data-v-100aafa2] {
    display: block;
    margin-left: 2.4rem
}

.menu-button[data-v-100aafa2] {
    box-sizing: border-box;
    padding: 14px 24px;
    border: 1px solid #484f58;
    border-radius: 6px;
    transition: all .2s ease-in-out
}

.menu-button[data-v-100aafa2]:hover {
    color: #24292e;
    background-color: #fff
}

.dropdown[data-v-7d755f8c] {
    position: relative
}

.dropdown .title[data-v-7d755f8c] {
    display: flex;
    align-items: center;
    padding: 0;
    color: #fff;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    background: 0 0;
    border: none;
    cursor: pointer
}

.dropdown .title svg[data-v-7d755f8c] {
    margin-left: .5rem;
    transition: all .2s ease-in-out
}

.dropdown .submenu-wrapper[data-v-7d755f8c] {
    position: absolute;
    top: 100%;
    left: 0;
    display: block;
    padding-top: 1.25rem;
    color: #24292e;
    white-space: nowrap;
    opacity: 0;
    transition: opacity .2s ease-in-out;
    pointer-events: none
}

.dropdown .submenu-wrapper .submenu[data-v-7d755f8c] {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 1.5rem;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 73px 65px rgba(0, 0, 0, .09), 0 30.4977px 27.1554px rgba(0, 0, 0, .0709366)
}

.dropdown .submenu-wrapper a[data-v-7d755f8c] {
    margin-bottom: 1rem;
    color: inherit
}

.dropdown .submenu-wrapper a[data-v-7d755f8c]:last-child {
    margin-bottom: 0
}

.dropdown.open .submenu-wrapper[data-v-7d755f8c] {
    opacity: 1;
    pointer-events: all
}

.dropdown.open .title svg[data-v-7d755f8c] {
    transform: rotateX(180deg)
}

.menu-mobile[data-v-4f6a3544] {
    display: flex;
    height: 2.8rem;
    color: #24292e;
    font-weight: 600
}

.menu-mobile .button[data-v-4f6a3544] {
    position: fixed;
    right: 1rem;
    z-index: 100;
    height: 2.8rem;
    color: #fff;
    cursor: pointer
}

.menu-mobile .shadow[data-v-4f6a3544] {
    left: 0;
    z-index: 30;
    background-color: #000;
    opacity: 0;
    pointer-events: none
}

.menu-mobile .overlay[data-v-4f6a3544], .menu-mobile .shadow[data-v-4f6a3544] {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .2s ease-in-out
}

.menu-mobile .overlay[data-v-4f6a3544] {
    right: 0;
    z-index: 50;
    display: flex;
    max-width: 15rem;
    transform: translateX(100%)
}

.menu-mobile .overlay a[data-v-4f6a3544] {
    color: #24292e
}

.menu-mobile .overlay-inner[data-v-4f6a3544] {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: auto;
    padding: 4.8rem .8rem .8rem;
    overflow: auto;
    background-color: #fff
}

.menu-mobile .overlay .items[data-v-4f6a3544] {
    flex: 1
}

.menu-mobile.open .shadow[data-v-4f6a3544] {
    opacity: .5;
    pointer-events: all
}

.menu-mobile.open .overlay[data-v-4f6a3544] {
    transform: translateX(0);
    transition: all .2s ease-in-out
}

.menu-mobile.open button[data-v-4f6a3544] {
    color: #24292e
}

@media (min-width: 1012px) {
    .menu-mobile[data-v-4f6a3544] {
        display: none
    }
}

.menu-mobile .items > [data-v-4f6a3544] {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid #b7bfc7
}

.menu-mobile .actions[data-v-4f6a3544] {
    margin-top: 1rem;
    text-align: center
}

.menu-mobile .menu-button[data-v-4f6a3544] {
    display: inline-block;
    box-sizing: border-box;
    padding: 14px 24px;
    border: 1px solid #484f58;
    border-radius: 6px;
    transition: all .2s ease-in-out
}

.menu-mobile .menu-button[data-v-4f6a3544]:hover {
    color: #24292e;
    background-color: #fff
}

.dropdown[data-v-538d6fa0] {
    position: relative
}

.dropdown button[data-v-538d6fa0] {
    padding: 0;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    background: 0 0;
    border: none
}

.dropdown .title[data-v-538d6fa0] {
    display: flex;
    align-items: center;
    cursor: pointer
}

.dropdown .title svg[data-v-538d6fa0] {
    margin-left: .5rem;
    transition: all .2s ease-in-out
}

.dropdown.isOpen .title svg[data-v-538d6fa0] {
    transform: rotateX(180deg)
}

.dropdown .submenu[data-v-538d6fa0] {
    padding-top: 1.8rem
}

.dropdown .submenu a[data-v-538d6fa0] {
    display: block;
    margin-bottom: .8rem
}

button[data-v-4b086efc] {
    margin: 0;
    padding: 0;
    background: 0 0;
    border: none
}

svg[data-v-4b086efc] {
    display: block;
    width: 2rem;
    height: 2rem
}

.line[data-v-4b086efc] {
    transition: stroke-dasharray .6s cubic-bezier(.4, 0, .2, 1), stroke-dashoffset .6s cubic-bezier(.4, 0, .2, 1);
    fill: none;
    stroke: currentColor;
    stroke-width: 6
}

.line1[data-v-4b086efc] {
    stroke-dasharray: 60 207
}

.line1[data-v-4b086efc], .line2[data-v-4b086efc] {
    stroke-width: 6
}

.line2[data-v-4b086efc] {
    stroke-dasharray: 60 60
}

.line3[data-v-4b086efc] {
    stroke-dasharray: 60 207;
    stroke-width: 6
}

.open .line1[data-v-4b086efc] {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6
}

.open .line2[data-v-4b086efc] {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6
}

.open .line3[data-v-4b086efc] {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6
}

.container[data-v-7bcbb783] {
    margin-bottom: -10rem;
    padding-bottom: 10rem;
//background-image: url(../assets/main/img/hero_bg.2fff21e.svg); background-repeat: no-repeat
}

.content[data-v-7bcbb783] {
    max-width: 48rem;
    margin: auto;
    padding-top: 2.5rem;
    text-align: center
}

@media (min-width: 768px) {
    .content[data-v-7bcbb783] {
        padding-top: 7rem
    }
}

.subtitle[data-v-7bcbb783] {
    margin-bottom: 5rem
}

a[data-v-2b4f4d1e] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    padding: 0 30px 0 32px;
    color: #24292f;
    font-weight: 600;
    line-height: 1;
    background-color: #f6f8fa;
    background-image: linear-gradient(180deg, #fff, transparent);
    border-radius: 6px;
    transition: .25s
}

a[data-v-2b4f4d1e]:focus, a[data-v-2b4f4d1e]:hover {
    background-color: #e1e4e8;
    box-shadow: 0 4px 7px rgba(0, 0, 0, .5), 0 100px 80px hsla(0, 0%, 100%, .0174624), 0 41.7776px 33.4221px hsla(0, 0%, 100%, .0235573), 0 22.3363px 17.869px hsla(0, 0%, 100%, .0282784), 0 12.5216px 10.0172px hsla(0, 0%, 100%, .0339075), 0 6.6501px 5.32008px hsla(0, 0%, 100%, .04317), 0 2.76726px 2.21381px hsla(0, 0%, 100%, .07)
}

a[data-v-2b4f4d1e]:active {
    background: linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0)), #f6f8fa
}

.octicon[data-v-411b7433] {
    position: relative;
    top: 3px;
    width: 16px;
    height: 16px;
    transform: translateX(0);
    transition: transform .2s
}

.octicon-chevrow-stem[data-v-411b7433] {
    stroke-dasharray: 10;
    stroke-dashoffset: 10;
    transition: stroke-dashoffset .2s
}

:focus > .octicon[data-v-411b7433], :hover > .octicon[data-v-411b7433] {
    transform: translateX(4px)
}

:focus > .octicon .octicon-chevrow-stem[data-v-411b7433], :hover > .octicon .octicon-chevrow-stem[data-v-411b7433] {
    stroke-dashoffset: 20
}

.planet-wrapper {
    transform: translateZ(0) translateY(var(--planet-position))
}

.planet-wrapper.transition, .planet-wrapper.transition .planet-back {
    transition: all .3s ease-in-out
}

.planet-wrapper.highlight .planet-back {
    transform: translateY(-15px)
}

.planet-wrapper[data-v-1b7cd93c] {
    position: absolute;
    z-index: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    overflow: hidden
}

.planet-wrapper .planet-back[data-v-1b7cd93c], .planet-wrapper .planet-front[data-v-1b7cd93c] {
    position: absolute;
    top: 0;
    left: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: top;
    background-size: 3600px
}

.planet-wrapper .planet-back[data-v-1b7cd93c] {
    background-size: 1252px
}

.planet-wrapper .planet-front[data-v-1b7cd93c] {
    top: 50px;
    background-size: 3200px
}

.container[data-v-1b7cd93c] {
    position: relative;
    z-index: 1;
    padding-top: 6rem;
    padding-bottom: 4rem
}

@media (min-width: 768px) {
    .container[data-v-1b7cd93c] {
        padding-top: 8rem;
        padding-bottom: 8rem
    }
}

.content[data-v-1b7cd93c] {
    max-width: 48rem;
    margin: auto;
    padding: 3rem 0;
    text-align: center
}

@media (max-width: 767px) {
    .content[data-v-1b7cd93c] {
        padding: 1rem 0 5rem
    }
}

a[data-v-80776c86] {
    position: relative;
    display: inline-block;
    align-items: center;
    justify-content: center;
    color: #79c0ff;
    font-weight: 600;
    line-height: 1;
    background: linear-gradient(92.7deg, #56d364 -1.37%, #79c0ff 78.71%);
    -webkit-background-clip: text;
    background-clip: text;
    border-radius: 6px;
    transition: .25s;
    -webkit-text-fill-color: transparent
}

a[data-v-80776c86]:before {
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(92.7deg, #56d364 -1.37%, #79c0ff 78.71%);
    transition: .2s;
    content: ""
}

a[data-v-80776c86]:active:before, a[data-v-80776c86]:focus:before, a[data-v-80776c86]:hover:before {
    width: calc(100% - 20px)
}

@media (max-width: 767px) {
    .packs[data-v-0146a00a] > :first-child {
        margin-bottom: 1rem
    }
}

@media (min-width: 768px) {
    .packs[data-v-0146a00a] {
        display: grid;
        grid-template-columns:1fr 1fr;
        gap: 3rem;
        padding: 3rem 0
    }
}

.icon[data-v-0146a00a] {
    margin-bottom: 1.5rem
}

.icon img[data-v-0146a00a] {
    width: auto;
    height: 3rem
}

.subtitle[data-v-0146a00a] {
    margin-bottom: 1.5rem;
    font-size: 16px;
    font-family: monospace
}

.link[data-v-0146a00a] {
    margin-top: 3rem
}

.card[data-v-e5b9c30e] {
    padding: 2.5rem;
    background-color: #21262d;
    border-radius: 6px
}

@media (max-width: 767px) {
    .card[data-v-e5b9c30e] {
        padding: 1.5rem
    }
}

a[data-v-440985de] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 1
}

a > span[data-v-440985de] {
    position: relative;
    margin-right: 3px
}

a > span[data-v-440985de]:before {
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: .2s;
    content: ""
}

a:active > span[data-v-440985de]:before, a:focus > span[data-v-440985de]:before, a:hover > span[data-v-440985de]:before {
    width: 100%
}

.container[data-v-f50b02f2] {
    position: relative;
    z-index: 1
}

.item[data-v-f50b02f2]:not(:last-child) {
    margin-bottom: 5rem
}

@media (min-width: 768px) {
    .item[data-v-f50b02f2] {
        display: flex;
        gap: 3rem;
        align-items: center
    }

    .item[data-v-f50b02f2]:not(:last-child) {
        margin-bottom: 3rem
    }
}

@media (max-width: 767px) {
    .item .desc[data-v-f50b02f2] {
        margin-bottom: 2rem
    }
}

@media (min-width: 768px) {
    .item .desc[data-v-f50b02f2] {
        width: 50%;
        padding-right: 2rem
    }
}

@media (min-width: 768px) {
    .item .image[data-v-f50b02f2] {
        width: 50%
    }
}

.item .image.scaled[data-v-f50b02f2] {
    transform: scale(1.3)
}

@media (min-width: 768px) {
    .item[data-v-f50b02f2]:nth-child(2n) {
        flex-direction: row-reverse
    }

    .item:nth-child(2n) .image[data-v-f50b02f2] {
        text-align: center
    }

    .item:nth-child(2n) .image img[data-v-f50b02f2] {
        width: 100%
    }
}

.container[data-v-b846f3b4] {
    margin-top: -2rem;
    margin-bottom: -2rem;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-image: url(../assets/main/img/featured_bg.9b6eb15.png);
    background-repeat: no-repeat;
    background-position: 50%
}

@media (min-width: 768px) {
    .container[data-v-b846f3b4] {
        background-size: contain
    }
}

@media (max-width: 767px) {
    .container[data-v-b846f3b4] {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-size: auto
    }
}

@media (max-width: 767px) {
    .featured .card[data-v-b846f3b4] {
        margin-bottom: 1rem
    }
}

@media (min-width: 768px) {
    .featured[data-v-b846f3b4] {
        display: grid;
        grid-template-columns:1fr 1fr;
        gap: 3rem;
        padding: 3rem 0
    }
}

.header[data-v-7ba125fa] {
    margin-bottom: 4rem
}

@media (max-width: 767px) {
    .header[data-v-7ba125fa] {
        text-align: center
    }
}

@media (min-width: 768px) {
    .items[data-v-7ba125fa] {
        display: flex;
        gap: 2.5rem
    }
}

@media (max-width: 767px) {
    .item[data-v-7ba125fa]:not(:last-child) {
        margin-bottom: 5rem
    }
}

@media (min-width: 768px) {
    .item[data-v-7ba125fa] {
        width: 25%
    }
}

.image[data-v-7ba125fa] {
    margin-bottom: 1.5rem
}

.title[data-v-7ba125fa]:hover {
    text-decoration: underline;
    text-underline-offset: .1em
}

.author[data-v-7ba125fa] {
    display: inline-block;
    margin-top: 1.5rem;
    color: #388bfd;
    font-weight: 600
}

.author[data-v-7ba125fa]:hover {
    text-decoration: underline;
    text-underline-offset: .1em
}

span[data-v-43caa1e7] {
    color: #79c0ff;
    background: linear-gradient(92.7deg, #56d364 -1.37%, #79c0ff 78.71%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent
}

.stories[data-v-3f42b522] {
    margin-top: 3rem;
    margin-bottom: 3rem;
    background-color: #21262d
}

@media (max-width: 767px) {
    .stories[data-v-3f42b522] {
        padding-top: 3rem;
        padding-bottom: 3rem
    }
}

@media (min-width: 768px) {
    .stories[data-v-3f42b522] {
        margin-top: 5rem;
        margin-bottom: 5rem
    }
}

@media (min-width: 768px) {
    .container[data-v-3f42b522] {
        display: flex;
        align-items: center
    }
}

@media (min-width: 768px) {
    .story[data-v-3f42b522] {
        width: 40%;
        padding: 4.5rem 6rem 4.5rem 0;
        border-right: 1px solid #0d1117
    }
}

@media (max-width: 767px) {
    .header[data-v-3f42b522] {
        margin-bottom: 2.5rem;
        text-align: center
    }
}

.item[data-v-3f42b522] {
    margin-top: 1.5rem
}

.item__image[data-v-3f42b522] {
    margin-bottom: 1.5rem
}

.item__title[data-v-3f42b522]:hover {
    text-decoration: underline;
    text-underline-offset: .1em
}

@media (max-width: 767px) {
    .testimonial[data-v-3f42b522] {
        padding-top: 5rem
    }
}

@media (min-width: 768px) {
    .testimonial[data-v-3f42b522] {
        width: 60%;
        padding-right: 3rem;
        padding-left: 8rem
    }
}

figure[data-v-3f42b522] {
    margin: 0
}

blockquote[data-v-3f42b522] {
    position: relative;
    margin: 0;
    padding: 0;
    color: #fff;
    font-weight: 500;
    font-size: var(--fs-h2);
    line-height: 1.3
}

@media (max-width: 767px) {
    blockquote[data-v-3f42b522] {
        text-align: center
    }
}

blockquote[data-v-3f42b522]:before {
    position: absolute;
    top: 0;
    left: -30px;
    font-weight: 800;
    content: "“"
}

@media (max-width: 767px) {
    blockquote[data-v-3f42b522]:before {
        top: -3rem;
        left: 50%;
        font-size: 3rem;
        transform: translateX(-50%)
    }
}

blockquote p[data-v-3f42b522] {
    margin-top: 0;
    margin-bottom: 1.5rem
}

figcaption[data-v-3f42b522] {
    font-family: monospace
}

@media (max-width: 767px) {
    figcaption[data-v-3f42b522] {
        text-align: center
    }
}

.avatar[data-v-3f42b522] {
    width: 3.5rem;
    height: 3.5rem;
    margin-top: 8px;
    overflow: hidden;
    border-radius: 50%
}

@media (max-width: 767px) {
    .avatar[data-v-3f42b522] {
        margin-right: auto;
        margin-left: auto
    }
}

.header[data-v-1c92890e] {
    margin-bottom: 3rem;
    text-align: center
}

@media (min-width: 768px) {
    .header[data-v-1c92890e] {
        margin-bottom: 6rem
    }
}

@media (min-width: 768px) {
    .items[data-v-1c92890e] {
        display: flex;
        gap: 2.5rem
    }
}

@media (max-width: 767px) {
    .item[data-v-1c92890e]:not(:last-child) {
        margin-bottom: 3rem
    }
}

@media (min-width: 768px) {
    .item[data-v-1c92890e] {
        width: 33.33%
    }
}

.image[data-v-1c92890e] {
    margin-bottom: 1.5rem
}

.title[data-v-1c92890e]:hover {
    text-decoration: underline;
    text-underline-offset: .1em
}

.date[data-v-1c92890e] {
    font-size: 16px;
    font-family: monospace
}

.location[data-v-1c92890e] {
    color: #fff;
    font-size: 14px
}

.bg-wrapper[data-v-3425f000] {
    background-image: url(../assets/main/img/partners_bg.f13db78.png);
    background-repeat: no-repeat;
    background-position: 50%
}

@media (min-width: 768px) {
    .bg-wrapper[data-v-3425f000] {
        background-size: contain
    }
}

.container[data-v-3425f000] {
    position: relative;
    z-index: 1;
    margin-top: -9rem;
    margin-bottom: -12rem;
    padding-top: 13rem;
    padding-bottom: 13rem
}

@media (min-width: 768px) {
    .container[data-v-3425f000] {
        margin-top: -5rem;
        margin-bottom: -5rem
    }
}

.partners[data-v-3425f000] {
    padding: 2.5rem 1rem;
    background-color: #0d1117;
    border-radius: 6px
}

@media (min-width: 768px) {
    .partners[data-v-3425f000] {
        padding: 4.5rem
    }
}

.header[data-v-3425f000] {
    margin-bottom: 3rem;
    text-align: center
}

.items[data-v-3425f000] {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between
}

@media (max-width: 767px) {
    .items[data-v-3425f000] {
        flex-wrap: wrap;
        justify-content: center
    }
}

.container[data-v-0c408e68] {
//background-image: url(../assets/main/img/join_bg.629bc49.svg)
}

.join[data-v-0c408e68] {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 4rem;
    padding-bottom: 6rem;
    text-align: center
}

@media (min-width: 768px) {
    .join[data-v-0c408e68] {
        padding-top: 6rem
    }
}

.social[data-v-0c408e68] {
    display: inline-flex;
    gap: 2.5rem;
    align-items: center;
    margin-top: 2rem
}

.twitter[data-v-0c408e68]:focus, .twitter[data-v-0c408e68]:hover {
    color: #1da1f2
}

.twitch[data-v-0c408e68]:focus, .twitch[data-v-0c408e68]:hover {
    color: #b9a3e3
}

a[data-v-363e9324] {
    color: #8b949e
}

a[data-v-363e9324]:hover {
    text-decoration: underline;
    text-underline-offset: .25em
}

.main-footer[data-v-363e9324] {
    display: grid;
    grid-template-columns:1fr 1fr;
    gap: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem
}

@media (min-width: 768px) {
    .main-footer[data-v-363e9324] {
        grid-template-columns:2fr 1fr 1fr 1fr 1fr;
        padding-top: 4.5rem;
        padding-bottom: 4.5rem
    }
}

.nav[data-v-363e9324] {
    font-weight: 500;
    font-size: 16px
}

.nav .title[data-v-363e9324] {
    margin-bottom: 2rem;
    color: #fff
}

.nav ul[data-v-363e9324] {
    padding-left: 0;
    list-style: none
}

.nav li[data-v-363e9324] {
    margin-top: 1rem
}

@media (max-width: 767px) {
    .logo[data-v-363e9324] {
        grid-column: span 2
    }
}

.extra[data-v-363e9324] {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #21262d
}

.extra .container[data-v-363e9324] {
    display: flex;
    align-items: center;
    justify-content: space-between
}

@media (max-width: 767px) {
    .extra .container[data-v-363e9324] {
        flex-direction: column;
        gap: .5rem
    }
}

.legal[data-v-363e9324] {
    display: flex;
    gap: 1.5rem;
    font-size: 14px
}

.social[data-v-363e9324] {
    display: flex;
    gap: 1rem;
    align-items: center
}

@media (max-width: 767px) {
    .social[data-v-363e9324] {
        order: -1
    }
}

.social a[data-v-363e9324]:focus, .social a[data-v-363e9324]:hover {
    opacity: .8
}

.initStyle {
    display: none;
}
</style>