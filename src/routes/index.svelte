<script lang="ts">
  let searchTerm: string;
  import { goto } from '$app/navigation';

  function handleSubmit() {
    goto('/search/' + searchTerm);
  }
</script>

<form>
  <label for="search">Search</label>
  <input id="search" type="text" bind:value={searchTerm} />
  <button type="submit" on:click|preventDefault={handleSubmit}>Search</button>
</form>
