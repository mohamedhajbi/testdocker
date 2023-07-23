<template>
    <div class="container mt-4">
      <div class="d-flex justify-content-end mb-3">
        <router-link to="/form" class="btn btn-success ms-16">
          Create
        </router-link>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
              <th scope="row">{{ product.id }}</th>
              <td>{{ product.title }}</td>
              <td style="word-break: break-all;">{{ product.description }}</td>
              <td>{{ product.price }}</td>
            <td class="d-flex">
              <router-link :to="'/update/' + product.id" class="btn btn-primary">Update</router-link>
              <button @click="deleteProduct(product.id)" class="btn btn-danger ms-2">Delete</button>
          </td>              
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import service from "./services" 
  export default {
    name:'HomeComponent',
    data() {
      return {
        products: [],
        error: null,
      };
    },
    methods: {
      async fetchProd() {
        try {
          const response = await service.products.productsControllerGetAllProducts().then((res)=>{
            console.log('aaaaaaaa',res)
            this.products = res?.data
            })
        } catch (error) {
          this.error = error.message;
          console.log('error', error);
        }
      },
      async deleteProduct(productId) {
      try {
        await service.products.productsControllerDeleteProduct(productId).then((res) => {
          console.log('Deleted product:', res);
          this.products = this.products.filter((product) => product.id !== productId);
        });
      } catch (error) {
        console.log('Error deleting product:', error);
      }
    },
  },
    async mounted() {
      await this.fetchProd();
    },
  };
  </script>