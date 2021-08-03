<template>
  <p>Enter Id to be Edited</p>
      <br>
  <form>
      <input type = "number" v-model="student.studId"/><br>
      

     
 
     <input type = "text" placeholder="student.firstName" v-model="student.firstName"><br>
<input type = "text" v-model="student.lastName"/><br>
<input type = "number" v-model="student.age"/><br>

     
<button type="button" class="btn btn-success" @click="editStudent">Edit Student</button>
 
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
     age: '',
      studId:''
    }

  }
 
  },

  methods :{
    /*async getStudent(e)
    {
       console.log(this.student.studId);
       // var res=
     //  this.student.age = parseInt(this.student.age);
      var res= await axios.get('https://localhost:44340/api/student/'+this.student.studId)
      .then((response) =>
      {this.getStudent=response.data;})
      console.log(res.data);
        e.preventDefault();
    },*/

    async editStudent(e)
    {
        e.preventDefault();
        console.log(this.student);
       // var re=await axios.get('https://localhost:44340/api/student/'+this.student.studId)
      // console.log(re.data);
       this.student.age = parseInt(this.student.age);
       this.student.id = parseInt(this.student.studId);
      var res= await axios.put('https://localhost:44340/api/student',this.student)
     // .then((response) =>
      //{this.getStudent=response.data;})
      //console.log(res.data);
        
    }
  }
}
</script>

<style>

</style>