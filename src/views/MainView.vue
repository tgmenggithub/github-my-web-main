<template>
    <div class="main" id="main">
        <div data-server-rendered="true" id="__nuxt"><!---->
            <div id="__layout">
                <div class="layout">
                    <HeaderViewComponent></HeaderViewComponent>
                    <ContainerViewComponent></ContainerViewComponent>
                    <FooterViewComponent></FooterViewComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HeaderViewComponent from "@/components/main/HeaderViewComponent.vue";
import ContainerViewComponent from "@/components/main/ContainerViewComponent.vue";
import FooterViewComponent from "@/components/main/FooterViewComponent.vue";

export default {
    name: "main",
    components: {
        HeaderViewComponent,
        ContainerViewComponent,
        FooterViewComponent,
    },
    data() {
        return {};
    },
    methods: {
    },
    mounted() {
    },
    beforeUnmount() {
    },
}
</script>

<style>

</style>