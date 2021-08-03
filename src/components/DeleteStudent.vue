<template>
<h1>Delete Student</h1>
  <form>
  <input type = "number" v-model="id"><br>
  <button @click="deleteStudent">Delete student</button>
</form>
</template>

<script>
import axios from 'axios';
export default {
data () {

  return {

    id:''

  }
 
  },
  methods: {

       async deleteStudent(e)
    {
        
        e.preventDefault();
       // console.log(this.id);

       const ide = parseInt(this.id);
       console.log(ide);
       await axios.delete('https://localhost:44340/api/student/'+ide)
      
      //console.log(res.data);
        
    }

  }
}
</script>

<style>

</style>