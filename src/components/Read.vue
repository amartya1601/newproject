<template >
  <div>
    <div class="text-center" id="viewheading">
      <h1>View Student Details</h1>
    </div>
    <br>

    <div>
      <table id="tablestyle" >
        <tr>
          <th >StudId</th>
          <th >FirstName</th>
          <th >LastName</th>
          <th >Age</th>
        </tr>
        <tr  v-for="student in getStudent" :key="student.studId">
          <td >{{student.studId}}</td>
          <td >{{student.firstName}}</td>
          <td >{{student.lastName}}</td>
          <td >{{student.age}}</td>
        </tr>
      </table>
    </div>

    <br>
    <ul class="nav mb-1 h4 justify-content-center">

      <li class="nav-item">
        <router-link  class="nav-link" to="/Add">Add Student</router-link>
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
    <br>

    <div id="footer">
      <footer-style>©Build and owned by Akriti and Amartya</footer-style>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  export default{
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
  methods: {
    async fetch(e) {
      await axios.get('https://localhost:44340/api/student')
      .then((response) => {
        this.getStudent = response.data;
      })
      
      e.preventDefault();
    }
  },

  mounted() {
  this.fetch();
  }
}
</script>


<style>

  body{
    background-image: url('https://i.pinimg.com/564x/41/1f/d0/411fd0e4f886f4085167827f47c1be17.jpg');
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  #viewheading{
    padding: 20px;
    color: rgba(75, 13, 126, 0.918);
    font: italic 1.2em "Fira Sans", serif, larger;
    font-weight: bolder;
    text-decoration: underline ;
    text-decoration-color: rgba(30, 1, 54, 0.918);
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
    font-weight: bold;
    padding: 10px;
  }

  #tablestyle th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: rgb(113, 54, 223);
    color: white;
    text-decoration: underline ;
    text-decoration-color: white;
  }

  #footer{
    position: fixed;
    width: 100%;
    right: 15px;
    bottom: 10px;
    font-size: 90%;
    text-align: right;
    color:rgba(30, 1, 54, 0.918)
  }


</style>