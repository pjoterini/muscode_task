<script lang="ts">
import { defineComponent } from 'vue';
import ProductsTable from './components/ProductsTable/ProductsTable.vue';
import TodoList from './components/TodoList/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: { TodoList, ProductsTable },
});
</script>

<template>
  <h1>Muscode App</h1>
  <div class="container">
    <TodoList />
    <ProductsTable />
    <TodoList />
    <TodoList />
    <TodoList />
  </div>
</template>

<style>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 1180px;
}
</style>
