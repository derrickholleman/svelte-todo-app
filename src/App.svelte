<script>
  import Todo from "./Todo.svelte";
  import AddTodo from "./AddTodo.svelte";
  import { onMount } from "svelte";

  let todos = [];

  onMount(async () => {
    const todosRes = await fetch("http://localhost:5001/todos");
    todos = await todosRes.json();
  });
</script>

<main>
  <h1 class="text-green-700 text-center text-5xl pt-2 pb-8">
    Svelte Todo App!
  </h1>

  <AddTodo />

  {#if todos}
    {#each todos as todo (todo.id)}
      <Todo {...todo} />
    {/each}
  {/if}
</main>
