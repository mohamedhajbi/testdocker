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
import service from './services'
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
        console.log('aaaaaaaaaaa');
       await service.products.productsControllerGetAllProducts().then((res)=> {
          console.log('aaaaaaaa', res?.data);
          this.products = res?.data
        })
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>