<template>
    <div class="container mt-4">
      <div class="d-flex justify-content-start mb-3">
        <router-link to="/" class="btn border ms-16">
          &#8592; back
        </router-link>
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="newProduct.title" type="text" class="form-control" id="title">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="newProduct.description" class="form-control" id="description" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input v-model="newProduct.price" type="number" class="form-control" id="price">
      </div>
      <button @click="addProduct" class="btn btn-success mt-2">Add Product</button>
    </div>
  </template>
  
  <script>
  import service from "./services" 
  export default {
    name:'FormComponent',
    data() {
      return {
        newProduct: {
          title: "",
          description: "",
          price: 0,
        },
        error: null,
      };
    },
    methods: {
      async addProduct() {
        if (!this.newProduct.title || !this.newProduct.description) {
        alert("Please fill in all the required fields.");
        return; 
      }
        try {
          const response = await service.products.productsControllerAddProduct(this.newProduct);
          console.log("response", response);
          alert("Porduct added")
          this.products.push(response.data); 
          this.newProduct.title = "";
          this.newProduct.description = "";
          this.newProduct.price = 0;
        } catch (error) {
          this.error = error.message;
          console.log("error", error);
        }
      },
    },
  };
  </script>
  