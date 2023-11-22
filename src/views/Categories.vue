<template>
    <div class="container">    
        <h1 class="text-start">Categories List
        <button @click="newCategory()"  
        class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
        </button>
    </h1>
        <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>                        
            </tr>
        </thead>
        <tbody>       
            <tr v-for="(category,index) in categories" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>{{ category.description }}</td>  
                <td>                    
               <button @click="deleteCategory(category.id)"
                   class="btn btn-danger mx-2">
                   <font-awesome-icon icon="trash" />
               </button> 
               <button @click="deleteCategory(category.id)"           
               class="bnt bnt-warning mx-2">
               <font-awesome-icon icon="pencil" />
            </button> 
            </td>                                         
            </tr>       
        </tbody>
        </table>
        </div>   
    </template>
<script>
    import axios from 'axios'
    import Swal from 'sweetalert2'

export default {

    name: 'Category',
    data(){
        return{
            categories: []
        }
   },
   methods: {
       deleteCategory(codigo){
           Swal.fire({
              title: `Do you want to delete the Category with id ${id}?`,
              showCancelButton: true,
              confirmButtonText: 'Delete',
              }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                 //Swal.fire('Saved!', '', 'success')
                 axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
                 .then(response => {
                     if (response.data.success){
                        Swal.fire('Deleted!! ', '', 'success')
                        this.categories = response.data.categories
                     }
                 })
               }
           })
    },
    editCategory(id){
    this.$router.push({name: 'EditarCategory', params: { id: `${id}` }} )
},
newComuna(){
    this.$router.push({name: 'NewCategory'});
}
},
mounted() {
    axios
        .get('http://127.0.0.1:8000/api/categories')
        .then(response => (this.categories = response.data.categories.data))
},
