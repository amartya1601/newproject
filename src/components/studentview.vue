<template>
<p> {{message}} </p>
  <h1> Hi this is first project of vue </h1>
  <input type = "text" v-model="message"/>

  <button @click="changename">Click here</button>
  <ul>
      <!--<tr v-for="items in jobCats" :key="items.jobCategoryId" > -->
      <li v-for="a in skills" :key="a.obj">
        {{a.obj}}
      </li>
    </ul>

    <div v-for="amount in getAmount" :key="amount.studId">
     {{amount.studId}}
</div>
<br>


<table>
<tr>
  <td>studId</td>
  <td>firstName</td>
  <td>lastName</td>
  

</tr>
<tr  v-for="amount in getAmount" :key="amount.studId">
<td>{{amount.studId}}</td>
<td>{{amount.firstName}}</td>
<td>{{amount.lastName}}</td>
<td>{{amount.age}}</td>


  </tr>



</table>
<form>

<input type = "text" v-model="student.firstName"><br>
<input type = "text" v-model="student.lastName"/><br>
<input type = "number" v-model="student.age"/><br>

<button @click="addStudent">Add student</button>

<button type="button" class="btn btn-success">Success</button>


</form>

<form>
  <input type = "number" v-model="id"><br>
  <button @click="deleteStudent">Delete student</button>
</form>
</template>


<script>

import axios from 'axios';
export default{
 data () {

  return {
    getAmount: [],

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
        this.getAmount = response.data;
      })
    },

    async addStudent(e)
    {
        console.log(this.student);
       // var res=
       this.student.age = parseInt(this.student.age);
      var res= await axios.post('https://localhost:44340/api/student',this.student)
      .then((response) =>
      {this.getAmount=response.data;})
      console.log(res.data);
        e.preventDefault();
    },

    async deleteStudent(e)
    {
        console.log(this.id);
       // var res=
       this.id = parseInt(this.id);
      var res= await axios.delete('https://localhost:44340/api/student/'+this.id)
      
      console.log(res.data);
        e.preventDefault();
    }
  },




  mounted() {
  this.fetch();
  }

}
</script>

<style>

</style>