import {createRouter,  createWebHistory} from 'vue-router';
import CopilotRemoteView from "@/views/open/CopilotRemoteView.vue";

const routes = [
  {
    path: '/copilotRemote',
    name: 'copilotRemote',
    component: CopilotRemoteView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
