<template>
    <div class="container">    
    <h1>Pay Mode List</h1>    
<table class="table">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Observation</th>           
        </tr>
    </thead>
    <tbody>       
        <tr>
            <th v-for="(paymode, index)in paymodes" :key="index">
            <th scope="row">{{ index +1 }}</th>
            <td>{{ paymode.id }}</td>
            <td>{{ paymode.name }}</td>
            <td>{{ paymode.observation }}</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    name: 'Paymode',
    data(){
        return{
            paymodes: []
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/paymodes')
            .then(response => (this.paymodes = response.data.paymodes))
    },
}
</script>