<template>
    <ProductList :products="data.products"></ProductList>
</template>

<script setup>
import ProductList from '../components/products/ProductList.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';

    const data = reactive({
        products: []
    });

    const fecthAllProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/product");
            // console.log(response.data);
            data.products = response.data.data.data; 
            // console.log(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    onMounted(() => fecthAllProducts()  )
</script>

<style>

</style>