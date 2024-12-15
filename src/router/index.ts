import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TechWritingView from '@/views/TechWritingView.vue'
import NonTechWritingView from '@/views/NonTechWritingView.vue'
import PostView from "@/views/PostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:"/projects",
      name:"projects",
      component:ProjectsView
    },
    {
      path:"/tech-writing",
      name:"tech-writing",
      component:TechWritingView
    },
    {
      path:"/non-tech",
      name:"non-tech",
      component:NonTechWritingView
    },
    {
      path: "/posts/:slug",
      name : "posts",
      component: PostView
    }
  ]
})

export default router
