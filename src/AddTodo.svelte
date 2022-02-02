<script>
  import { v4 as uuidv4 } from "uuid";
  import { todos } from "./stores/todoStore";

  let btnDisabled = true;
  let text = "";

  $: inputLength = text.length;

  let btnDisabledClass =
    "block mx-auto py-2 px-3 my-3 bg-green-600 rounded-md text-white opacity-50 cursor-default";
  let btnActiveClass =
    "block mx-auto py-2 px-3 my-3 bg-green-600 hover:bg-green-500 rounded-md text-white";

  function trim(value) {
    return value.replace(/^\s+|\s+$/g, "");
  }

  const handleInput = (e) => {
    text = trim(e.target.value);

    if (text.length >= 5) {
      btnDisabled = false;
    } else {
      btnDisabled = true;
    }
  };

  function handleSubmit() {
    let newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };

    todos.addTodo(newTodo);
    text = "";
    btnDisabled = true;
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="text-center pb-2">
  <label for="addTodo">Add a Todo</label>
  <input
    type="text"
    bind:value={text}
    on:input={handleInput}
    id="addTodo"
    class="border-black border rounded-md pl-1"
    required
    placeholder="Today I need to..."
    autocomplete="off"
  />
  {#if inputLength >= 1 && inputLength < 5}
    <p class="text-sm text-red-700">Todo must be at least 5 characters</p>
  {/if}
  <button
    type="submit"
    class={btnDisabled ? btnDisabledClass : btnActiveClass}
    disabled={btnDisabled}>Submit</button
  >
</form>
