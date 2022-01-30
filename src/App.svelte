<script>
  import { todos } from "./stores/todoStore";
  import Todo from "./Todo.svelte";
  import AddTodo from "./AddTodo.svelte";
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
