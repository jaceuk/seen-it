<script lang="ts">
  let searchValue: string;
  import { goto } from '$app/navigation';

  function handleSubmit() {
    goto('/search/' + searchValue);
  }
</script>

<form>
  <label for="search">Search</label>
  <input id="search" type="text" bind:value={searchValue} />
  <button type="submit" on:click|preventDefault={handleSubmit}>Search</button>
</form>
