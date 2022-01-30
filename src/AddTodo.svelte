<script>
  import { v4 as uuidv4 } from "uuid";
  import { todos } from "./stores/todoStore";

  let text;

  const handleInput = (e) => {
    text = e.target.value;
  };

  function addTodo() {
    let todo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };
    todos.update((currentTodos) => [...currentTodos, todo]);
    text = "";
  }
</script>

<form on:submit|preventDefault={addTodo} class="text-center pb-4">
  <label for="addTodo">Add a Todo</label>
  <input
    type="text"
    bind:value={text}
    on:input={handleInput}
    id="addTodo"
    class="border-black border rounded-md pl-1"
  />
  <button
    type="submit"
    class="block mx-auto py-2 px-3 my-3 bg-green-600 hover:bg-green-500 border rounded-md text-white"
    >Submit</button
  >
</form>
