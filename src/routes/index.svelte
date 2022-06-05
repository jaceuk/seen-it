<script lang="ts">
  import { goto } from '$app/navigation';
  import Overlay from '@components/Overlay.svelte';

  let searchTerm: string;
  let showModal = false;

  function handleSubmit() {
    goto('/search/' + searchTerm);
  }

  function handleToggleModal() {
    showModal = !showModal;
  }
</script>

<form>
  <label for="search">Search</label>
  <input id="search" type="text" bind:value={searchTerm} />
  <button type="submit" on:click|preventDefault={handleSubmit}>Search</button>
</form>

<button on:click={handleToggleModal}>overlay</button>

{#if showModal}
  <Overlay on:close={handleToggleModal}>Overlay content here</Overlay>
{/if}
