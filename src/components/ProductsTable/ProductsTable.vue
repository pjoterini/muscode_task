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
  <div class="card-container grid-item-1">
    <div class="upper-section">
      <h2>Lista Produktów</h2>
    </div>
    <table>
      <tbody>
        <tr>
          <th class="th-1">#</th>
          <th class="th-2">nazwa</th>
          <th class="th-3">promocyjna cena</th>
          <th class="th-4">cena</th>
          <th class="th-5">waluta</th>
        </tr>
        <tr class="table-row" v-for="product in products" :key="product.id">
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
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.4rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

th {
  text-transform: uppercase;
}

.table-row:hover {
  background-color: #f5f8fa;
}

.grid-item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}

@media (max-width: 700px) {
  .grid-item-1 {
    grid-column-start: 0;
    grid-column-end: 1;
  }
}

@media (min-width: 1200px) {
  th-1 {
    width: 5%;
  }
  th-2 {
    width: 45%;
  }
  th-3 {
    width: 25%;
  }
  th-4 {
    width: 15%;
  }
  th-5 {
    width: 10%;
  }
}
</style>
