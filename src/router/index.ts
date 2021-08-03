import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import studentview from "../components/studentview.vue";



const routes: Array<RouteRecordRaw> = [

  {

    path: "/",

    name: "studentview",

    component: studentview,

  },

  

];



const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),

  routes,

});



export default router;