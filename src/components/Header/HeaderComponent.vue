<template>
    <div>
        <div class="header-container">
            <nav class="navigation container" data-v-83148ee2="">
                <a style="cursor: pointer" @click="clickLogo" aria-current="page" class="nuxt-link-exact-active nuxt-link-active" data-v-83148ee2="">
                    <span class="logo-wrapper" data-v-70116428="" data-v-83148ee2="">
                        <img class="logo-image" data-v-70116428="" data-v-83148ee2="" src="../../assets/main/img/logo.png">
                      &nbsp;&nbsp;糖果梦
                    </span>
                </a>
                <div class="menu-desktop" data-v-100aafa2="" data-v-83148ee2="">
                    <a style="cursor: pointer" @click="clickLogo" data-v-100aafa2="">首页</a>
                    <div class="dropdown" data-v-7d755f8c="" data-v-100aafa2="" v-hover-class="'open'">
                        <button class="title" data-v-7d755f8c="">
                            产品
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7d755f8c="">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78.22a.75.75 0 010 1.06L5.53 5.53a.75.75 0 01-1.06 0L.22 1.28A.75.75 0 011.28.22L5 3.94 8.72.22a.75.75 0 011.06 0z" fill="currentColor"></path>
                            </svg>
                        </button>
                        <div class="submenu-wrapper" data-v-7d755f8c="">
                            <div class="submenu" data-v-7d755f8c="">
                                <a href="https://githubedu.com" target="_blank" data-v-7d755f8c="" data-v-100aafa2="">GitHub Student Pack</a>
                                <a href="https://ai.tgmeng.com" target="_blank" data-v-7d755f8c="" data-v-100aafa2="">ChatGPT Plus</a>
                                <a href="https://ai.tgmeng.com" target="_blank" data-v-7d755f8c="" data-v-100aafa2="">Midjourney</a>
                                <a href="https://githubedu.com/jetbrains" target="_blank" data-v-7d755f8c="" data-v-100aafa2="">Jetbrains</a>
                            </div>
                        </div>
                    </div>
<!--                    <div class="dropdown" data-v-7d755f8c="" data-v-100aafa2="" v-hover-class="'open'">-->
<!--                        <button class="title" data-v-7d755f8c="">-->
<!--                            教程-->
<!--                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7d755f8c="">-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78.22a.75.75 0 010 1.06L5.53 5.53a.75.75 0 01-1.06 0L.22 1.28A.75.75 0 011.28.22L5 3.94 8.72.22a.75.75 0 011.06 0z" fill="currentColor"></path>-->
<!--                            </svg>-->
<!--                        </button>-->
<!--                        <div class="submenu-wrapper" data-v-7d755f8c="">-->
<!--                            <div class="submenu" data-v-7d755f8c="">-->
<!--                                <a href="https://space.bilibili.com/395446863" target="_blank" data-v-7d755f8c="" data-v-100aafa2="">B站</a>-->
<!--                                <a href="https://blog.tgmeng.com" target="_blank" data-v-7d755f8c="" data-v-100aafa2="">博客</a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                    <a href="https://space.bilibili.com/395446863" target="_blank" data-v-100aafa2="">B站</a>
                    <a href="https://blog.tgmeng.com" target="_blank" data-v-100aafa2="">博客</a>
                    <a href="https://shop.tgmeng.com" target="_blank" data-v-100aafa2="">商城</a>
                    <a style="cursor: pointer;color: #00fff3" @click="clickShouHou" data-v-100aafa2="">售后群</a>
                    <!--                <a href="/sign_in" class="menu-button" data-v-100aafa2="">Sign in</a>-->
                </div>
                <div class="menu-mobile" ref="openButton" data-v-4f6a3544="" data-v-83148ee2="">
                    <div class="shadow" data-v-4f6a3544=""></div>
                    <div class="overlay" data-v-4f6a3544="">
                        <div class="overlay-inner" data-v-4f6a3544="">
                            <div class="items" data-v-4f6a3544="">
                                <a style="cursor: pointer" @click="clickLogo" data-v-4f6a3544="">首页</a>
                                <div tabindex="0" class="dropdown" data-v-538d6fa0="" data-v-4f6a3544="" v-click-small-list-class="'isOpen'">
                                    <button class="title" data-v-538d6fa0="">
                                        产品
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-538d6fa0="">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78.22a.75.75 0 010 1.06L5.53 5.53a.75.75 0 01-1.06 0L.22 1.28A.75.75 0 011.28.22L5 3.94 8.72.22a.75.75 0 011.06 0z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                    <div data-v-538d6fa0="" class="submenu-wrapper initStyle">
                                        <div data-v-538d6fa0="" class="submenu">
                                            <a href="https://githubedu.com" target="_blank" data-v-4f6a3544="" data-v-538d6fa0="">GitHub Student Pack</a>
                                            <a href="https://ai.tgmeng.com" target="_blank" data-v-4f6a3544="" data-v-538d6fa0="">ChatGPT Plus</a>
                                            <a href="https://ai.tgmeng.com" target="_blank" data-v-4f6a3544="" data-v-538d6fa0="">Midjourney</a>
                                            <a href="https://githubedu.com/jetbrains" target="_blank" data-v-4f6a3544="" data-v-538d6fa0="">Jetbrains</a>
                                        </div>
                                    </div>
                                </div>

<!--                                <div tabindex="0" class="dropdown" data-v-538d6fa0="" data-v-4f6a3544="" v-click-small-list-class="'isOpen'">-->
<!--                                    <button class="title" data-v-538d6fa0="">-->
<!--                                        教程-->
<!--                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-538d6fa0="">-->
<!--                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78.22a.75.75 0 010 1.06L5.53 5.53a.75.75 0 01-1.06 0L.22 1.28A.75.75 0 011.28.22L5 3.94 8.72.22a.75.75 0 011.06 0z" fill="currentColor"></path>-->
<!--                                        </svg>-->
<!--                                    </button>-->
<!--                                    <div data-v-538d6fa0="" class="submenu-wrapper initStyle">-->
<!--                                        <div data-v-538d6fa0="" class="submenu">-->
<!--                                            <a href="https://space.bilibili.com/395446863" target="_blank" data-v-4f6a3544="" data-v-538d6fa0="">B站</a>-->
<!--                                            <a href="https://blog.tgmeng.com" target="_blank" data-v-4f6a3544="" data-v-538d6fa0="">博客</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->

                                <a href="https://space.bilibili.com/395446863" target="_blank" data-v-4f6a3544="">B站</a>
                                <a href="https://blog.tgmeng.com" target="_blank" data-v-4f6a3544="">博客</a>
                                <a href="https://shop.tgmeng.com" target="_blank" data-v-4f6a3544="">商城</a>
                                <a style="cursor: pointer;color: red" @click="clickShouHou" data-v-4f6a3544="">售后群</a>
                            </div>
                            <!--                        <div class="actions" data-v-4f6a3544="">-->
                            <!--                            <a href="/sign_in" class="menu-button" data-v-4f6a3544="">Sign in</a>-->
                            <!--                        </div>-->
                        </div>
                    </div>
                    <button class="button" data-v-4b086efc="" data-v-4f6a3544="" @click="handleOpenOrCloseButtonClick">
                        <svg viewBox="0 0 100 100" data-v-4b086efc="">
                            <path d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" class="line line1" data-v-4b086efc=""></path>
                            <path d="M 20,50 H 80" class="line line2" data-v-4b086efc=""></path>
                            <path d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" class="line line3" data-v-4b086efc=""></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    components: {},
    data() {
        return {
            isHovered: false,
        };
    },
    methods: {
        // 小屏下右上角按钮点击的打开与关闭
        handleOpenOrCloseButtonClick() {
            this.$refs.openButton.classList.toggle('open');
        },
        clickShouHou() {
            this.$store.state.isConnect = true
        },
        clickLogo() {
            this.$store.state.isConnect = false
        }
    },
    directives: {
        // 大屏下菜单悬浮子菜单的出现隐藏
        hoverClass: {
            beforeMount(el, binding) {
                el.addEventListener("mouseenter", () => {
                    el.classList.add(binding.value);
                });
                el.addEventListener("mouseleave", () => {
                    el.classList.remove(binding.value);
                });
            },
        },
        // 小屏下点击菜单按钮打开关闭菜单
        clickSmallListClass: {
            beforeMount(el, binding) {
                el.addEventListener("click", () => {
                    // el.classList.toggle(binding.value);
                    const childElement = el.querySelector(".submenu-wrapper");
                    if (childElement) {
                        // 检查子元素的 display 属性
                        const display = getComputedStyle(childElement).display;
                        // 切换子元素的 display 属性
                        childElement.style.display = display === "block" ? "none" : "block";
                        if (childElement.style.display === "block") {
                            // 如果 display 是 block，则添加指定的类
                            el.classList.add(binding.value);
                        } else {
                            // 如果 display 不是 block，则移除指定的类
                            el.classList.remove(binding.value);
                        }
                    }
                })
            },
        }
    },
    mounted() {
    },
    beforeUnmount() {
    },
}
</script>

<style scoped>
.header-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #0D1117;
    box-shadow: 0 2px 4px #0D1117;
}

.logo-image {
    width: 31px;
    height: 31px;
    border-radius: 15px;
}
</style>