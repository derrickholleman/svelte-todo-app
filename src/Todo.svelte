<script>
  export let text;
  export let isCompleted;
</script>

<div class="text-center text-blue-600 border-black border-2 m-4">
  <p>{text}</p>
  <input type="checkbox" checked={isCompleted} />
</div>
