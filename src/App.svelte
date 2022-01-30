<script>
  import Todo from "./Todo.svelte";
  import AddTodo from "./AddTodo.svelte";
  import { todos } from "./stores/todoStore";
  $: totalTodos = $todos.filter((todo) => !todo.isCompleted).length;

  const handleClearCompletedTodos = () => {
    todos.clearCompletedTodos();
  };
</script>

<main>
  <h1 class="text-green-700 text-center text-5xl pt-2 pb-8 mx-1">
    Svelte Todo App!
  </h1>

  <AddTodo />

  <div class="text-center mb-4">
    <button
      class="bg-red-600 hover:bg-red-400 py-2 px-3 text-white rounded-md"
      on:click={handleClearCompletedTodos}>Clear COMPLETED Todos</button
    >
  </div>

  <p class="text-center text-yellow-600 text-lg">
    {totalTodos === 1
      ? `You have ${totalTodos} todo left to do!`
      : `You have ${totalTodos} todos left to do!`}
  </p>

  {#if todos}
    {#each $todos as todo (todo.id)}
      <Todo {...todo} />
    {/each}
  {/if}
</main>
