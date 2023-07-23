<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-start mb-3">
      <router-link to="/" class="btn border ms-16">
        &#8592; Back to Home
      </router-link>
    </div>
    <div v-if="loading">Loading product details...</div>
    <div v-else-if="currentProduct">
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="currentProduct.title" type="text" class="form-control" id="title" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="currentProduct.description" class="form-control" id="description" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input v-model="currentProduct.price" type="number" class="form-control" id="price">
      </div>
      <button @click="updateProduct" class="btn btn-primary mt-2">Update Product</button>
    </div>
    <div v-else>
      Error fetching product details. Please try again later.
    </div>
  </div>
</template>

<script>
import service from "./services";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "UpdateComponent",
  data() {
    return {
      currentProduct: {
        id: null,
        title: "",
        description: "",
        price: null,
      },
      loading: true,
      error: null,
    };
  },
  methods: {
    async updateProduct() {
      if (!this.currentProduct.title || !this.currentProduct.description) {
        alert("Please fill in all the required fields.");
        return;
      }

      try {
        await service.products.productsControllerUpdateProduct(this.currentProduct);
        alert("Product updated successfully!");
        // Optionally, you can redirect back to the Home page or do other actions upon successful update

      } catch (error) {
        this.error = error.message;
        console.log("Error updating the product:", error);
        alert("Error updating the product. Please try again later.");
      }
    },
    async fetchProductDetails(productId) {
      try {
        const response = await service.products.productsControllerGetProduct(productId);
        this.currentProduct = response.data;
        this.loading = false;
      } catch (error) {
        this.error = error.message;
        console.log("Error fetching product details:", error);
        this.loading = false; // Set loading to false even in case of an error
        // Optionally, you can show an error message to the user if the product details couldn't be fetched.
        // For simplicity, we'll use an alert here.
        alert("Error fetching product details. Please try again later.");
      }
    },
  },
  created() {
    const productId = this.$route.params.productId;
    this.fetchProductDetails(productId);
  },
});
</script>
