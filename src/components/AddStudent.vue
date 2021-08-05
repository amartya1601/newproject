<template>
  <div class="text-center">
    <div id="add">
      <h1>Add Student Details</h1>
    </div>


    <form>
      <label for="firstname">First Name</label><br>
        <input type = "text"  id="firstname"  placeholder="Enter First Name" v-model="student.firstName"/><br>

      <label for="lastname">Last Name</label><br>
        <input type = "text"  id="lastname"  placeholder="Enter Last Name" v-model="student.lastName"/><br>

      <label for="age">Age</label><br>
        <input type = "number" id="age"  placeholder="Enter Age" v-model="student.age"/><br>

      <br>
      <button type="button" class="btn btn-success" @click="addStudent">Add student</button>

      <div class="form-floating mb-3">
        <p class="badge bg-secondary"></p>
          <h4 v-if="ResposneMetadata.status==200">Added Successfully!</h4>
          <h4 v-else-if="ResposneMetadata.status==400">Wrong Entries . Please re-enter </h4>
        </div>
    </form>
    <br>


    <ul class="nav mb-1 h4 justify-content-center">
      <li class="nav-item">
        <router-link color="green" class="nav-link" to="/">View Student Details</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/Delete">Delete Student</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/Edit">Edit Student</router-link>
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
       
        },

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
        
        console.log(res.data);
         console.log(res.status);
        this.ResposneMetadata.status = res.status;
        e.preventDefault();
      }
    }
  }
</script>

<style>
  #add {
    padding: 20px;
    color: rgba(124, 9, 134, 0.918);
    font: italic 1.2em "Fira Sans", serif, larger;
    font-weight: bolder;
    text-decoration: underline ;
    text-decoration-color: rgba(2, 0, 0, 0.918);
    font-size: 100%;
    text-align: center;
  }

</style>