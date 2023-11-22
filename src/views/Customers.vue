<template>
<div class="container">    
    <h1>Customers List</h1>    
    <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Document Number</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
            <th scope="col">Birthday</th>
            <th scope="col">Phone Number</th>
            <th scope="col">E-Mail</th>            
        </tr>
    </thead>
    <tbody>       
        <tr v-for="(customer,index) in customers" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ customer.id }}</td>
            <td>{{ customer.document_number }}</td>
            <td>{{ customer.first_name }}</td>
            <td>{{ customer.last_name }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.birthday }}</td>
            <td>{{ customer.phone_number }}</td>
            <td>{{ customer.email }}</td>                                   
        </tr>       
    </tbody>
    </table>
    </div>   
</template>
<script>
import axios from 'axios'

export default {

    name: 'Customer',
    data(){
        return{
           customers: []
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/customers')
            .then(response => (this.customers = response.data.customers))
    },
}
</script>