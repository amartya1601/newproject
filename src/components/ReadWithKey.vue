<template>
  <form>


<input type = "number" v-model="id"/><br>

<button type="button" class="btn btn-success" @click="searchStudent">Search student</button>

</form>
</template>

<script>
import axios from 'axios';
export default {
data () {

  return {
    getStudent: [],
    id:''

  }
 
  },

  methods :
  {
    async searchStudent(e)
    {
        console.log(this.id);
       // var res=
     //  this.student.age = parseInt(this.student.age);
      var res= await axios.get('https://localhost:44340/api/student/'+this.id)
      .then((response) =>
      {this.getStudent=response.data;})
      console.log(res.data);
        e.preventDefault();
    }
  }
}
</script>

<style>

</style>