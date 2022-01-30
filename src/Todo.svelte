<script>
  import { todos } from "./stores/todoStore";
  import { slide, fade } from "svelte/transition";

  // todo object properties
  export let id;
  export let text;
  export let isCompleted;

  let checkedClass = "pb-2 text-2xl text-blue-600 line-through w-4/5 mx-auto";
  let uncheckedClass = "pb-2 text-2xl text-blue-600 w-4/5 mx-auto";

  const handleCompleteTodo = () => {
    todos.updateCompleted(id, isCompleted)
  };

  const handleDeleteTodo = (todoId) => {
    todos.deleteTodo(todoId);
  };
</script>

<div
  class="text-center border-black border-2 my-4 mx-auto p-2 w-3/4 lg:w-1/2 rounded-md relative"
  in:slide={{ duration: 600 }}
  out:fade
>
  <p class={isCompleted ? checkedClass : uncheckedClass}>{text}</p>
  <div class="flex items-center justify-center">
    <label class="mr-2" for={`complete-todo-${id}`}>Complete</label>
    <input
      type="checkbox"
      on:click={handleCompleteTodo}
      bind:checked={isCompleted}
      id={`complete-todo-${id}`}
    />
  </div>
  <button
    class="absolute -top-1 right-1 text-3xl text-red-600 hover:text-red-300"
    aria-label="delete todo"
    on:click={() => handleDeleteTodo(id)}>X</button
  >
</div>
