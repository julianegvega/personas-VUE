<template>
    <div class="container">    
    <h1>Products List</h1>    
<table class="table">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th> 
            <th scope="col">Stock</th> 
            <th scope="col">Category Id</th>           
        </tr>
    </thead>
    <tbody>       
        <tr>
            <th v-for="(product, index)in products" :key="index">
            <th scope="row">{{ index +1 }}</th>
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.categoryid }}</td>


        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    name: 'Product',
    data(){
        return{
            products: []
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/products')
            .then(response => (this.products = response.data.products))
    },
}
</script>