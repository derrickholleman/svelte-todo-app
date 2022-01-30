<script>
  export let text;
  export let isCompleted;
</script>

<div
  class="text-center border-black border-2 my-4 mx-auto p-2 w-3/4 lg:w-1/2 rounded-md"
>
  <p class="pb-2 text-2xl text-blue-600">{text}</p>
  <div class="flex items-center justify-center">
    <label class="mr-2" for="complete">Complete</label>
    <input type="checkbox" checked={isCompleted} id="complete" />
  </div>
</div>
