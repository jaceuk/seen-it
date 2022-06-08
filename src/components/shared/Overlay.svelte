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

<style lang="scss">
  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background: var(--color-white);
    top: 0;
    left: 0;
    right: 0;
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
