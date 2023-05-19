<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IProduct, mockProducts } from '../../utils/productsMockup';
import ProductCard from './ProductCard.vue';

export default defineComponent({
  components: { ProductCard },
  setup() {
    const products = ref<IProduct[]>(mockProducts);

    const editProduct = (
      e: Event,
      id: number,
      editedProduct: IProduct,
      closeModal: () => void
    ) => {
      e.preventDefault();

      const { title, price, promoPrice, currency } = editedProduct;

      products.value[id] = {
        id: products.value[id].id,
        title,
        price,
        promoPrice,
        currency,
      };

      closeModal();
    };

    return { products, editProduct };
  },
});
</script>

<template>
  <div v-for="product in products" :key="product.id">
    <ProductCard :product="product" :editProduct="editProduct" />
  </div>
</template>
