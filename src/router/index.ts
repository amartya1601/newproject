import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Read from "../components/Read.vue";
import ReadWithKey from "../components/ReadWithKey.vue";
import AddStudent from "../components/AddStudent.vue";
import DeleteStudent from "../components/DeleteStudent.vue";
import EditStudent from "../components/EditStudent.vue";



const routes: Array<RouteRecordRaw> = [

  {

    path: "/",

    name: "Read",

    component: Read,

  },

  {

    path: "/",

    name: "ReadWithKey",

    component: ReadWithKey,

  },
  {

    path: "/",

    name: "AddStudent",

    component: AddStudent,

  },
  {

    path: "/",

    name: "DeleteStudent",

    component: DeleteStudent,

  },
  {

    path: "/",

    name: "EditStudent",

    component: EditStudent,

  }

  

];



const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),

  routes,

});



export default router;