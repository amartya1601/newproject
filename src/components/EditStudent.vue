<template>
  <div class="text-center">
    <div id="edit">
      <h1>Edit Student Details</h1>
    </div>
      Enter Id to be Edited
    <br>
    <form>
      <input type = "number" placeholder="Enter Id" v-model="student.studId"/><br>
    
      <label for="firstname">First Name</label><br>
      <input type = "text"  id="firstname"  placeholder="Enter First Name" v-model="student.firstName"/><br>
    
      <label for="lastname">Last Name</label><br>
      <input type = "text"  id="lastname"  placeholder="Enter Last Name" v-model="student.lastName"/><br>
    
      <label for="age">Age</label><br>
      <input type = "number" id="age"  placeholder="Enter Age" v-model="student.age"/><br>
      <br>
      
      <button type="button" class="btn btn-success" @click="editStudent">Edit Student</button>

      <div class="form-floating mb-3">
        <p class="badge bg-secondary"></p>
          <h4 v-if="ResposneMetadata.data==1">Edit Successfully!</h4>
         
          <h4 v-else-if="ResposneMetadata.data==0 && ResposneMetadata.status==200">ID doesnt exist . Please re-enter </h4>
        </div>
    </form>
  
    <br>
    <ul class="nav mb-1 h4 justify-content-center">

      <li class="nav-item">
        <router-link color="green" class="nav-link" to="/Add">Add Student</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/Delete">Delete Student</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/">View Student Details</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/ReadKey">Search Student</router-link>
      </li>

    </ul>

    <div id="footer">
      <footer-style>©Build and owned by Akriti and Amartya</footer-style>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {

    return {
      getStudent: [],

 ResposneMetadata: {
        status: 0,
       data:0
        },
      student:{
        firstName: '',
        lastName: '',
        age: '',
        studId: ''
      }
    }
  },
  
  methods :{
   /* async GetStudent(e)
    {
      console.log(this.student.studId);
      // var res=
      // this.student.age = parseInt(this.student.age);
      this.student.studId=parseInt(this.student.studId);
      var res= await axios.get('https://localhost:44340/api/student/'+this.student.studId)
      .then((response) =>
      {this.getStudent=response.data;})
      console.log(res.data);
      e.preventDefault();
    },*/

    async editStudent(e)
    {   
      console.log(this.student);
      this.student.age = parseInt(this.student.age);
      this.student.studId = parseInt(this.student.studId);
      var result= await axios.put('https://localhost:44340/api/student',this.student)
      
          console.log(result.data);
        console.log(result.status);
        this.ResposneMetadata.data = result.data;
        this.ResposneMetadata.status = result.status;
      e.preventDefault();  
    }
  }
}
</script>


<style>
  #edit {
    padding: 20px;
    color: rgba(6, 80, 16, 0.918);
    font: italic 1.2em "Fira Sans", serif, larger;
    font-weight: bolder;
    text-decoration: underline ;
    text-decoration-color: rgba(2, 0, 0, 0.918);
    font-size: 100%;
    text-align: center;
  }

</style>