<template>
  <h1>Add Component</h1>


<form>

<input type = "text" v-model="student.firstName"><br>
<input type = "text" v-model="student.lastName"/><br>
<input type = "number" v-model="student.age"/><br>

<button type="button" class="btn btn-success" @click="addStudent">Add student</button>

</form>


</template>

<script>
import axios from 'axios';
export default {
data () {

  return {
    getStudent: [],

    student:{

    firstName: '',
    lastName: '',
     age: ''
    }
    
    

  }
 
  },

  methods :{
    async addStudent(e)
    {
        console.log(this.student);
       // var res=
       this.student.age = parseInt(this.student.age);
      var res= await axios.post('https://localhost:44340/api/student',this.student)
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