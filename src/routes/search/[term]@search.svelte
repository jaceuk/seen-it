<script context="module" lang="ts">
  import { loadData } from './loadData.json';
  interface ILoad {
    fetch: any;
    params: any;
  }

  export async function load({ fetch, params }: ILoad) {
    const shows = await loadData(params.term, 'tv');
    const movies = await loadData(params.term, 'movie');

    return {
      props: {
        shows: { data: shows.data, totalPages: shows.totalPages, totalResults: shows.totalResults },
        movies: { data: movies.data, totalPages: movies.totalPages, totalResults: movies.totalResults },
      },
    };
  }
</script>

<script lang="ts">
  import CardHorizontal from '$components/CardHorizontal.svelte';
  import TabGroup from '$components/TabGroup.svelte';

  export let shows: any;
  export let movies: any;
</script>

<svelte:head>
  <title>Search results</title>
</svelte:head>

<TabGroup totalMovies={movies.totalResults} totalShows={shows.totalResults}>
  <div slot="shows">
    {#each shows.data as show}
      <CardHorizontal data={show} />
    {/each}
  </div>

  <div slot="movies">
    {#each movies.data as movie}
      <CardHorizontal data={movie} />
    {/each}
  </div>
</TabGroup>
