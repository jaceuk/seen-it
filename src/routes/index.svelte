<script lang="ts">
  import TabGroup from '$components/TabGroup.svelte';
  import VerticalCard from '$components/VerticalCard.svelte';
  import trendingShows from '$data/trendingShows.json';
  import trendingMovies from '$data/trendingMovies.json';
</script>

<TabGroup>
  <div slot="shows">
    <h2>Trending TV shows</h2>
    <div class="results">
      {#each trendingShows.results as data}
        <VerticalCard {data} />
      {/each}
    </div>

    <h2>Latest TV shows</h2>
    <div class="results">
      {#each trendingShows.results as data}
        <VerticalCard {data} />
      {/each}
    </div>
  </div>

  <div slot="movies">
    <h2>Trending movies</h2>
    <div class="results">
      {#each trendingMovies.results as data}
        <VerticalCard {data} />
      {/each}
    </div>

    <h2>Latest movies</h2>
    <div class="results">
      {#each trendingShows.results as data}
        <VerticalCard {data} />
      {/each}
    </div>
  </div>
</TabGroup>

<style>
  .results {
    display: flex;
    gap: var(--size-base);
    margin: var(--size-base) calc(var(--size-base) * -1);
    align-items: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0 var(--size-base);
  }
</style>
