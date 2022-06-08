<script lang="ts">
  import Overlay from '$components/shared/Overlay.svelte';

  let showModal = false;

  function handleToggleModal() {
    showModal = !showModal;
  }
</script>

<button on:click={handleToggleModal}>overlay</button>

{#if showModal}
  <Overlay on:close={handleToggleModal}>Overlay content here</Overlay>
{/if}

<style>
  button {
    padding: 32px;
    background-color: white;
    cursor: pointer;
  }
</style>
