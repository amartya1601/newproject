import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Vuenow from 'vue'; import VueRouter from 'vue-router'; 

import Read from "../components/Read.vue";
import ReadWithKey from "../components/ReadWithKey.vue";
import AddStudent from "../components/AddStudent.vue";
import DeleteStudent from "../components/DeleteStudent.vue";
import EditStudent from "../components/EditStudent.vue";
import { Vue } from "vue-class-component";






const routes: Array<RouteRecordRaw> = [

  {

    path: "/",

    name: "Read",

    component: Read,

  },

  {

    path: "/ReadKey",

    name: "ReadWithKey",

    component: ReadWithKey,

  },
  {

    path: "/Add",

    name: "AddStudent",

    component: AddStudent,

  },
  {

    path: "/Delete",

    name: "DeleteStudent",

    component: DeleteStudent,

  },
  {

    path: "/Edit",

    name: "EditStudent",

    component: EditStudent,

  }

  

];



const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),

  routes,

});



export default router;