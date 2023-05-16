<script lang="ts">
import { defineComponent } from 'vue';
import { products } from '../../utils/productsMockup';

export default defineComponent({
  data() {
    return {
      products: products,
    };
  },
});
</script>

<template>
  <div class="card-container">
    <div class="upper-section">
      <h2>Lista Produktów</h2>
    </div>
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>nazwa</th>
          <th>promocyjna cena</th>
          <th>cena</th>
          <th>waluta</th>
        </tr>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.promoPrice }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.currency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
tr:hover {
  background-color: #f5f8fa;
}
</style>
