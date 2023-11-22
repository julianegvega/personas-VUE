<template>
   <div class="container text-start">
      <h1 class="text-primary fw-bold">New</h1>
      <div class="card">
          <div class="card-header fw-bold">
             Category
        </div>
     <div class="card-body">
         <form @submit.prevent="saveCategory">
             <div class="row mb-3">
              
               <label for="id" class="form-label">id</label>
               
               <div class="input-group">
                   <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                   <input type="text" class="form-control" id="id" placeholder="id category" disabled
                      v-model='category.id'
                   >
               </div>
            </div>

           <div class="row mb-3">
               
               <label for="comu_nomb" class="form-label">Name : </label>
               <div class="input-group">
                   <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                   <input type="text" class="form-control" id="name" placeholder="Category name" 
                      v-model='category.name'>
               </div>
            </div>

            <div class="row mb-3">
               
               <label for="description" class="form-label">Description : </label>
               <div class="input-group">
                   <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                   <input type="text" class="form-control" id="name" placeholder="Category description" 
                      v-model='category.description'>
               </div>
            </div>

     <button class="btn btn-primary" type="submit">Save</button>
     <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>
    </form>
  </div>
 </div> 
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'EditarCategory',
    data(){
        return{
            category:{
                id:0,
                name: '',
                description: 0
            },            
        }
   },
   methods: {
   cancelar(){
      this.$router.push({name: 'Categories'})
   },
   
   async saveCategory(){       
       const res = await axios.post(`http://127.0.0.1:8000/api/categories/`, this.category)
       console.log(res);
       if (res.status == 200){
           this.$router.push({name: 'Categories'})
           Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Category has been saved',
               showConfirmButton: false,
               timer: 2000           
           })
       }
   }
},

</script>