<template>
    <div>
      <button @click="getData">Get Product</button>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price }}
        </li>
      </ul>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        error: null,
      };
    },
    methods: {
      async getData() {
        try {
          const response = await axios.get('https://3000-mohamedhajbi-testdocker-h6ubmbuuzne.ws-eu101.gitpod.io/products');
          this.products = response.data;
        } catch (error) {
          this.error = error.message;
        }
      },
    },
  };
  </script>
  