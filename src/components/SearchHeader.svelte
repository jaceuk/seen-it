<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import ArrowLeftSVG from '$components/svgs/ArrowLeftSVG.svelte';

  let searchTerm = '';
  let inputRef: any;

  function handleBack() {
    window.history.back();
  }

  function handleSubmit() {
    if (searchTerm !== undefined && searchTerm.length > 2) {
      goto(`/search/${searchTerm}`, { replaceState: true, keepfocus: true });
    }
  }

  onMount(() => {
    inputRef.focus();
  });
</script>

<header>
  <button class="back-button" on:click={handleBack} aria-label="Back"><ArrowLeftSVG /></button>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="search" class="sr-only">Search</label>
    <input
      id="search"
      type="text"
      bind:value={searchTerm}
      bind:this={inputRef}
      placeholder="Search TV shows & movies"
    />
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
    background-color: var(--color-white);
    border-radius: var(--border-radius-small);
    border: 1px solid var(--color-grey);
    padding: var(--size-small) var(--size-base);
  }

  .back-button {
    background: none;
    border: none;
    display: flex;
    padding: var(--size-small);
  }
</style>
