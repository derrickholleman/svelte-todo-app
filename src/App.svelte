<script>
  import Todo from "./Todo.svelte";
  import AddTodo from "./AddTodo.svelte";
  import { todos } from "./stores/todoStore";
  $: totalTodos = $todos.filter((todo) => !todo.isCompleted).length;
</script>

<main>
  <h1 class="text-green-700 text-center text-5xl pt-2 pb-8">
    Svelte Todo App!
  </h1>

  <AddTodo />

  <p class="text-center text-yellow-600 text-lg">
    You have {totalTodos} todos left to do!
  </p>

  {#if todos}
    {#each $todos as todo (todo.id)}
      <Todo {...todo} />
    {/each}
  {/if}
</main>
