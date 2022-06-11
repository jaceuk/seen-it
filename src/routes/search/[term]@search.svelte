<script lang="ts">
  import TabGroup from '$components/TabGroup.svelte';
  import SearchResults from '$components/SearchResults.svelte';
</script>

<svelte:head>
  <title>Search results</title>
</svelte:head>

<TabGroup>
  <div slot="shows">
    <div class="results">
      <SearchResults type="tv" />
    </div>
  </div>

  <div slot="movies">
    <div class="results">
      <SearchResults type="movie" />
    </div>
  </div>
</TabGroup>
