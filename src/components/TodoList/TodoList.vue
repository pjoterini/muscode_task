<script lang="ts">
export default defineComponent({
  data() {
    return {
      id: 0,
      todos: [
        {
          id: 0,
          text: 'Lorem ipsum dolor sit amet.',
        },
      ],
      tasksDone: 0,
    };
  },
  methods: {
    handleEnter() {
      const newTodo = {
        id: this.id++,
        text: 'Lorem ipsum dolor sit amet.',
      };
      if (this.todos.length < 10) {
        this.todos.push(newTodo);
      }
    },
    taskDone(e: any) {
      if (e.target.checked) {
        this.tasksDone++;
      } else {
        this.tasksDone--;
      }
    },
  },
});
</script>

<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<template>
  <div class="card-container">
    <div class="upper-section">
      <h2>Lista todo</h2>
      <h2>Wykonane: {{ tasksDone }}</h2>
    </div>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.id">
        <input @change="taskDone" type="checkbox" />
        <p>{{ todo.text }}</p>
      </li>
      <li @click="handleEnter" class="add-element">
        <span class="plus">+</span> Dodaj nowy element checklisty
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

li {
  margin-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid#b2b2b2;
  display: flex;
  align-items: center;
}

input {
  width: 1.3em;
  height: 1.3em;

  border-radius: 50%;
  vertical-align: middle;
  border: 3px solid #b2b2b2;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

input:checked {
  border-color: #862583;
}

p {
  margin: 0;
  margin-left: 1rem;
}

.add-element {
  padding-bottom: 0;
  color: #b2b2b2;
  cursor: pointer;
}

.plus {
  font-size: 2rem;
  margin-right: 1rem;
}
</style>
