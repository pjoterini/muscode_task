<script lang="ts">
import { defineComponent } from 'vue';
import ProductCardsContainer from './components/ProductCards/ProductCardsContainer.vue';
import ProductsTable from './components/ProductsTable/ProductsTable.vue';
import TodoList from './components/TodoList/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: { TodoList, ProductsTable, ProductCardsContainer },
});
</script>

<template>
  <h1>Muscode App</h1>
  <div class="container">
    <TodoList />
    <ProductsTable />
    <ProductCardsContainer />
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 1rem;
  width: 1180px;
  padding: 1rem;
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
