<template>

  <div class="text-center" id="readkey">
    <h1> Search Student </h1>
  </div>

  <div class="text-center">
  <form>
    <input type = "number" v-model="id"/><br><br>
    <button type="button" class="btn btn-success" @click="searchStudent">Search student</button>
    <br>
    <br>

    <div class="center">
      <table  id="tablestyle">
        <tr  v-for="student in getStudent" :key="student.studId">
          <th>StudId</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
        </tr>
        <tr  v-for="student in getStudent" :key="student.studId">
          <td class="table-danger">{{student.studId}}</td>
          <td class="table-danger">{{student.firstName}}</td>
          <td class="table-danger">{{student.lastName}}</td>
          <td class="table-danger">{{student.age}}</td>
        </tr>
      </table>
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
      <router-link class="nav-link" to="/Edit">Edit Student</router-link>
      </li>

      <li class="nav-item">
      <router-link class="nav-link" to="/">View Student Details</router-link>
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
      },
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
  #readkey {
    padding: 20px;
    color: rgb(131, 9, 5);
    font: italic 1.2em "Fira Sans", serif, larger;
    font-weight: bolder;
    text-decoration: underline ;
    text-decoration-color: rgba(2, 0, 0, 0.918);
    font-size: 100%;
    text-align: center;
  }

  #tablestyle {
    margin: auto;
    text-align: center;
    width: 60%;
    border:  3px solid #080a06;
    padding: 15px;
    padding-left: 30px;
    }

  #tablestyle td, #tablestyle tr {
    border: 1px solid rgb(12, 3, 3);
    padding: 8px;
  }

  #tablestyle th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: rgb(233, 230, 48);
    color: rgb(233, 65, 14);
    text-decoration: underline ;
    text-decoration-color: rgb(233, 65, 14);
  }

</style>