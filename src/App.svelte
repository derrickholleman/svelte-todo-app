<script>
  import { onMount } from "svelte";
  import { todos } from "./stores/todoStore";
  import { getTodos } from "./utils/api";
  import Todo from "./Todo.svelte";
  import AddTodo from "./AddTodo.svelte";

  onMount(async () => {
    await getTodos()
      .then((todosRes) => {
        todos.set(todosRes);
      })
      .catch((err) => {
        console.error(err);
      });
  });
</script>

<main>
  <h1 class="text-green-700 text-center text-5xl pt-2 pb-8">
    Svelte Todo App!
  </h1>

  <AddTodo />

  {#if todos}
    {#each $todos as todo (todo.id)}
      <Todo {...todo} />
    {/each}
  {/if}
</main>
