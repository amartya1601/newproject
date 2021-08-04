<template>
  <div class="text-center">
    <div id="add">
      <h1>Add Student Details</h1></div>


    <form>
      <label for="firstname">First Name</label><br>
        <input type = "text"  id="firstname"  placeholder="Enter First Name" v-model="student.firstName"/><br>

      <label for="lastname">Last Name</label><br>
        <input type = "text"  id="lastname"  placeholder="Enter Last Name" v-model="student.lastName"/><br>

      <label for="age">Age</label><br>
        <input type = "number" id="age"  placeholder="Enter Age" v-model="student.age"/><br>

      <br>
      <button type="button" class="btn btn-success" @click="addStudent">Add student</button>
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
  </div>
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
  #add {
    padding: 20px;
    color: rgba(100, 4, 109, 0.918);
    font: italic 1.2em "Fira Sans", serif, larger;
    font-weight: bolder;
    text-decoration: underline ;
    text-decoration-color: rgba(2, 0, 0, 0.918);
    font-size: 100%;
    text-align: center;
  }
</style>