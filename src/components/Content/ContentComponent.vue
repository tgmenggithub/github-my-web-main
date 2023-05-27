<template>
    <div>
        <div class="py-6">
            <main>
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div>
                        <!--1顶部大片-->
                        <Component1Top></Component1Top>
                        <!--2产品列表-->
                        <Component2ProductMy></Component2ProductMy>
                        <Component2ProductList></Component2ProductList>
                        <!--3合作联系-->
                        <Component3Cooperation></Component3Cooperation>
                        <!--4近期资讯-->
                        <Component4RecentInfo></Component4RecentInfo>
                        <!--5产品场景-->
                        <Component5ProductScenario></Component5ProductScenario>
                        <!--6故事讲述-->
                        <Component6Story></Component6Story>
                        <!--7未来计划-->
                        <Component7Future></Component7Future>
                        <!--8合作商-->
                        <Component8BusinessPartner></Component8BusinessPartner>
                        <!--9加入我们-->
                        <Component9JoinUs></Component9JoinUs>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Component1Top from "./ContentComponent/Component1Top.vue";
import Component2ProductList from "./ContentComponent/Component2ProductList.vue";
import Component2ProductMy from "./ContentComponent/Component2ProductMy.vue";
import Component3Cooperation from "./ContentComponent/Component3Cooperation.vue";
import Component4RecentInfo from "./ContentComponent/Component4RecentInfo.vue";
import Component5ProductScenario from "./ContentComponent/Component5ProductScenario.vue";
import Component6Story from "./ContentComponent/Component6Story.vue";
import Component7Future from "./ContentComponent/Component7Future.vue";
import Component8BusinessPartner from "./ContentComponent/Component8BusinessPartner.vue";
import Component9JoinUs from "./ContentComponent/Component9JoinUs.vue";

export default {
    name: "Content",
    components: {Component1Top, Component2ProductList, Component2ProductMy, Component3Cooperation, Component4RecentInfo, Component5ProductScenario, Component6Story, Component7Future, Component8BusinessPartner, Component9JoinUs},
    data() {
        return {};
    },
    methods: {},
    computed: {}
}
</script>

<style scoped>

</style>