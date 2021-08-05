<template>
  <div class="text-center">
    <div id="delete">
      <h1>Delete Student</h1>
    </div>
    <form>
      <label for="studId">Enter Id to Delete</label><br>
      <input type = "number" id="studId" placeholder="Enter Id" v-model="id"><br>
      <br>
      <button type="button" class="btn btn-success" @click="deleteStudent">Delete student
        
      </button>

      <div class="form-floating mb-3">
        <p class="badge bg-secondary"></p>
          <h4 v-if="ResposneMetadata.data==1">Deleted Successfully!</h4>
          <h4 v-else-if="ResposneMetadata.data==0 && ResposneMetadata.status==200">ID doesnt exist . Please re-enter </h4>
        </div>

    </form>
    <br>
    <br>

    <ul class="nav mb-1 h4 justify-content-center">
      <li class="nav-item">
      <router-link color="green" class="nav-link" to="/Add">Add Student</router-link>
      </li>

      <li class="nav-item">
      <router-link class="nav-link" to="/">View Student Details</router-link>
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
        id:'',
        ResposneMetadata: {
        status: 0,
        data: 0
        }
      }  
    },
    methods: {
      async deleteStudent(e)
      {
        e.preventDefault();
        // console.log(this.id);

        const ide = parseInt(this.id);
        console.log(ide);
        var result = await axios.delete('https://localhost:44340/api/student/'+ide)
        
        //console.log(res.data);
        
        console.log(result.data);
        console.log(result.status);
        this.ResposneMetadata.data = result.data;
        this.ResposneMetadata.status = result.status;
      },
      
    }
  }
</script>


<style>

  #delete {
    padding: 20px;
    color: rgba(14, 12, 134, 0.918);
    font: italic 1.2em "Fira Sans", serif, larger;
    font-weight: bolder;
    text-decoration: underline ;
    text-decoration-color: rgba(2, 0, 0, 0.918);
    font-size: 100%;
    text-align: center;
  }

  h3{
    font-size: 50%;
  }

</style>