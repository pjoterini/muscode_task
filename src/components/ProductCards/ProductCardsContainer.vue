<script lang="ts">
import { defineComponent } from 'vue';
import { products } from '../../utils/productsMockup';
import ProductCard from './ProductCard.vue';

export default defineComponent({
  data() {
    return {
      products: products,
    };
  },
  components: { ProductCard },
});
</script>

<template>
  <div v-for="product in products" :key="product.id">
    <ProductCard :product="product" />
  </div>
</template>
