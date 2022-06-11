<script lang="ts">
  import { goto } from '$app/navigation';
  import ArrowLeft from '$components/svgs/ArrowLeft.svelte';

  let searchTerm: string | undefined;

  function handleBack() {
    window.history.back();
  }

  function handleSubmit() {
    if (searchTerm !== undefined) {
      goto(`/search/${searchTerm}`, { replaceState: true });
    }
  }
</script>

<header>
  <button class="back-button" on:click={handleBack} aria-label="Back"><ArrowLeft /></button>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="search" class="sr-only">Search</label>
    <input id="search" type="text" bind:value={searchTerm} placeholder="Search TV shows & movies" />
    <button type="submit" class="sr-only">Search</button>
  </form>
</header>

<style>
  header {
    background-color: var(--color-grey-light);
    padding: var(--size-base);
    display: flex;
    align-items: center;
    gap: var(--size-base);
  }

  form {
    width: 100%;
  }

  input {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 0px var(--size-small) rgba(0, 0, 0, 0.15);
    border-radius: var(--border-radius-small);
    border: none;
    padding: var(--size-small) var(--size-base);
  }

  .back-button {
    background: none;
    border: none;
    display: flex;
    padding: var(--size-small);
  }
</style>
