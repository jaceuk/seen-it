<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch('close');
  }
</script>

<div class="overlay">
  <button on:click={handleClose}>Back</button>
  <slot />
</div>
