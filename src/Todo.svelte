<script>
  import { todos } from "./stores/todoStore";
  export let id;
  export let text;
  export let isCompleted;

  let checkedClass = "pb-2 text-2xl text-blue-600 line-through";
  let uncheckedClass = "pb-2 text-2xl text-blue-600";

  const handleCompleteTodo = () => {
    todos.update((currentTodos) => {
      let copiedTodos = [...currentTodos];
      let checkedTodo = copiedTodos.find((todo) => todo.id === id);

      checkedTodo.isCompleted = !isCompleted;

      return copiedTodos;
    });
  };
</script>

<div
  class="text-center border-black border-2 my-4 mx-auto p-2 w-3/4 lg:w-1/2 rounded-md"
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
</div>
