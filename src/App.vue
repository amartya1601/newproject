<template>
  <studentview/>
  <AddStudent/>
  <DeleteStudent/>
  <EditStudent/>
</template>

<script>
 import studentview from './components/studentview.vue';
 import AddStudent from './components/AddStudent.vue';
 import DeleteStudent from './components/DeleteStudent.vue';
  import EditStudent from './components/EditStudent.vue';

 export default {
   components:{
     studentview,AddStudent,EditStudent,DeleteStudent
     

   }
 }
</script>