<script lang="ts">
import { defineComponent, ref } from 'vue';
import PlusIcon from './PlusIcon.vue';

interface ITodo {
  id: number;
  text: string;
  checked: boolean;
}

export default defineComponent({
  components: { PlusIcon },
  setup() {
    const id = ref(0);
    const newTodoTextValue = ref('');
    const todos = ref<ITodo[]>([
      {
        id: 0,
        text: 'Lorem ipsum dolor sit amet.',
        checked: false,
      },
    ]);
    const tasksDone = ref<number>(0);

    const addTodo = (e: Event) => {
      e.preventDefault();

      const newTodo: ITodo = {
        id: id.value++,
        text: newTodoTextValue.value,
        checked: false,
      };

      newTodoTextValue.value = '';

      if (todos.value.length < 10) {
        todos.value.push(newTodo);
      }
    };

    const taskDone = (e: Event, todo: ITodo) => {
      const ischecked = (<HTMLInputElement>e.target).checked;
      if (ischecked) {
        todo.checked = true;
        tasksDone.value++;
      } else {
        todo.checked = false;
        tasksDone.value--;
      }
    };

    return {
      id,
      todos,
      newTodoTextValue,
      tasksDone,
      addTodo,
      taskDone,
    };
  },
});
</script>

<template>
  <div class="card-container">
    <div class="upper-section">
      <h2>Lista todo</h2>
      <h2>Wykonane: {{ tasksDone }}</h2>
    </div>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.id">
        <input
          class="checkbox"
          @change="e => taskDone(e, todo)"
          type="checkbox"
        />
        <p>{{ todo.text }}</p>
        <img
          class="check-icon"
          v-if="todo.checked"
          src="/check.svg"
          alt="check-icon"
        />
      </li>
    </ul>
    <form action="submit" @submit="addTodo">
      <div class="add-element-input-container">
        <PlusIcon />
        <input
          class="add-element-input"
          type="text"
          v-model="newTodoTextValue"
          placeholder="Dodaj nowy element checklisty"
          required
        />
      </div>
    </form>
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
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
}

.checkbox {
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  vertical-align: middle;
  border: 3px solid var(--border);
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.checkbox:checked {
  border: 3px solid var(--button-focus-color);
}

p {
  margin: 0;
  margin-left: 1rem;
}

.check-icon {
  width: 20px;
  margin-left: 1rem;
}

.add-element-input-container {
  display: flex;
}

.add-element-input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: var(--border);
  border: none;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
}

.add-element-input:focus {
  outline: none;
  font-size: 1rem;
}
</style>
