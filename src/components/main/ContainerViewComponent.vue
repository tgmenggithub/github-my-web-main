<template>
    <!--    中间部分-->
    <div>
        <div class="py-6">
            <main>
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div>
                        <V1DescViewComponent></V1DescViewComponent>
                        <V2ProductViewComponent></V2ProductViewComponent>
                        <V3ProductDescViewComponent></V3ProductDescViewComponent>
                        <V4ProductLookBackViewComponent></V4ProductLookBackViewComponent>
                        <V5ProductActionViewComponent></V5ProductActionViewComponent>
                        <V6StoryViewComponent></V6StoryViewComponent>
                        <V7UpcomingEventsViewComponent></V7UpcomingEventsViewComponent>
                        <V8PartnersViewComponent></V8PartnersViewComponent>
                        <V9JoinConversationViewComponent></V9JoinConversationViewComponent>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>

import V1DescViewComponent from "@/components/main/container/V1DescViewComponent.vue";
import V2ProductViewComponent from "@/components/main/container/V2ProductViewComponent.vue";
import V3ProductDescViewComponent from "@/components/main/container/V3ProductDescViewComponent.vue";
import V4ProductLookBackViewComponent from "@/components/main/container/V4ProductLookBackViewComponent.vue";
import V5ProductActionViewComponent from "@/components/main/container/V5ProductActionViewComponent.vue";
import V6StoryViewComponent from "@/components/main/container/V6StoryViewComponent.vue";
import V7UpcomingEventsViewComponent from "@/components/main/container/V7UpcomingEventsViewComponent.vue";
import V8PartnersViewComponent from "@/components/main/container/V8PartnersViewComponent.vue";
import V9JoinConversationViewComponent from "@/components/main/container/V9JoinConversationViewComponent.vue";

export default {
    name: "container",
    components: {
        V1DescViewComponent,
        V2ProductViewComponent,
        V3ProductDescViewComponent,
        V4ProductLookBackViewComponent,
        V5ProductActionViewComponent,
        V6StoryViewComponent,
        V7UpcomingEventsViewComponent,
        V8PartnersViewComponent,
        V9JoinConversationViewComponent,
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {
    },
    beforeUnmount() {
    },
}
</script>

<style>

</style>