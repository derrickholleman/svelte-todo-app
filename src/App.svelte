<script>
  import Todo from "./Todo.svelte";
  import AddTodo from "./AddTodo.svelte";
  import { todos } from "./stores/todoStore";
  $: totalTodosLeft = $todos.filter((todo) => !todo.isCompleted).length;

  // if no todo is marked as completed, disable 'clear completed' button
  $: btnDisabled = $todos.every((todo) => todo.isCompleted === false);
  let btnDisabledClass =
    "bg-red-400 py-2 px-3 text-white rounded-md cursor-default";
  let btnActiveClass =
    "bg-red-600 hover:bg-red-400 py-2 px-3 text-white rounded-md";

  const handleClearCompletedTodos = () => {
    todos.clearCompletedTodos();
  };

  // call this to use Local Storage
  todos.useLocalStorage();
</script>

<main>
  <h1 class="text-green-700 text-center text-5xl pt-2 pb-8 mx-1">
    Svelte Todo App!
  </h1>

  <AddTodo />

  <div class="text-center mb-4">
    <button
      class={btnDisabled ? btnDisabledClass : btnActiveClass}
      on:click={handleClearCompletedTodos}
      disabled={btnDisabled}>Clear COMPLETED Todos</button
    >
  </div>

  <p class="text-center text-yellow-600 text-lg">
    {totalTodosLeft === 1
      ? `You have ${totalTodosLeft} todo left to do!`
      : `You have ${totalTodosLeft} todos left to do!`}
  </p>

  {#if todos}
    {#each $todos as todo (todo.id)}
      <Todo {...todo} />
    {/each}
  {/if}
</main>
