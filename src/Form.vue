<template>
    <div class="container mt-4">
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
      <button @click="addProduct" class="btn btn-success">Add Product</button>
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
        try {
          const response = await service.products.productsControllerAddProduct(this.newProduct);
          console.log("response", response);
          // Assuming the API returns the newly added product in the response,
          // you can add it to the local list of products for display
          this.products.push(response.data); // Assuming you have "products" defined in the parent component (e.g., Products.vue)
  
          // Clear the form fields after successful addition
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
  