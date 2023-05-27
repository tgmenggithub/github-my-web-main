<template>
    <div>
        <div class="py-6 main-style">
            <main>
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div>
                        <!--1顶部大片-->
                        <Component1Top></Component1Top>
                        <!--2产品列表-->
                        <Component2ProductMy></Component2ProductMy>
<!--                        <Component2ProductList></Component2ProductList>-->
<!--                        &lt;!&ndash;3合作联系&ndash;&gt;-->
<!--                        <Component3Cooperation></Component3Cooperation>-->
<!--                        &lt;!&ndash;4近期资讯&ndash;&gt;-->
<!--                        <Component4RecentInfo></Component4RecentInfo>-->
<!--                        &lt;!&ndash;5产品场景&ndash;&gt;-->
<!--                        <Component5ProductScenario></Component5ProductScenario>-->
<!--                        &lt;!&ndash;6故事讲述&ndash;&gt;-->
<!--                        <Component6Story></Component6Story>-->
<!--                        &lt;!&ndash;7未来计划&ndash;&gt;-->
<!--                        <Component7Future></Component7Future>-->
<!--                        &lt;!&ndash;8合作商&ndash;&gt;-->
<!--                        <Component8BusinessPartner></Component8BusinessPartner>-->
<!--                        &lt;!&ndash;9加入我们&ndash;&gt;-->
<!--                        <Component9JoinUs></Component9JoinUs>-->
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
.main-style{
    margin-bottom: 5rem;
}
</style>