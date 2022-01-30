<script>
  import { v4 as uuidv4 } from "uuid";

  let btnDisabled = true;
  let text;

  let btnDisabledClass =
    "block mx-auto py-2 px-3 my-3 bg-green-600 border rounded-md text-white opacity-50 cursor-default";
  let btnActiveClass =
    "block mx-auto py-2 px-3 my-3 bg-green-600 hover:bg-green-500 border rounded-md text-white";

  const handleInput = (e) => {
    text = e.target.value;

    if (text.length >= 5) {
      btnDisabled = false;
    } else {
      btnDisabled = true;
    }
  };

  function addTodo() {
    fetch("http://localhost:5001/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        text: text,
        isCompleted: false,
      }),
    });
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
    required
  />
  <button
    type="submit"
    class={btnDisabled ? btnDisabledClass : btnActiveClass}
    disabled={btnDisabled}>Submit</button
  >
</form>
