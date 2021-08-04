<template>

  <p>View records</p><br>
  <button @click="fetch">Click here</button>
  <li class="nav-item">
   <router-link class="nav-link" to="/Add">Add Student</router-link>
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
  
<br>


<table>
<tr>
  <td>StudId</td>
  <td>FirstName</td>
  <td>LastName</td>
  <td>Age</td>
  

</tr>
<tr  v-for="student in getStudent" :key="student.studId">
<td>{{student.studId}}</td>
<td>{{student.firstName}}</td>
<td>{{student.lastName}}</td>
<td>{{student.age}}</td>


  </tr>



</table>



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
    async fetch() {
       await axios.get('https://localhost:44340/api/student')
      .then((response) => {
        this.getStudent = response.data;
      })
    },

    
  },

  mounted() {
  this.fetch();
  }

}
</script>

<style>

</style>