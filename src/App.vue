<template>
  
  <router-view/>
</template>

<script>
 import Read from './components/Read.vue';
 import ReadWithKey from './components/ReadWithKey.vue';
 import AddStudent from './components/AddStudent.vue';
 import DeleteStudent from './components/DeleteStudent.vue';
import EditStudent from './components/EditStudent.vue';

 export default {
   components:{
    // Read,ReadWithKey,AddStudent,EditStudent,DeleteStudent
     

   }
 }
</script>