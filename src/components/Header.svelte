<script lang="ts">
  import { goto } from '$app/navigation';

  let searchTerm: string | undefined;

  function handleSubmit() {
    if (searchTerm !== undefined) {
      goto('/search/' + searchTerm);
    }
  }
</script>

<header>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="search">Search</label>
    <input id="search" type="text" bind:value={searchTerm} />
    <button type="submit">Search</button>
  </form>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 200;
  }
</style>
