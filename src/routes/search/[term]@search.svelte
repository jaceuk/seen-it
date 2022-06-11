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
      props: { shows: shows.data, movies: movies.data },
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

<TabGroup>
  <div slot="shows">
    {#each shows as show}
      <CardHorizontal data={show} />
    {/each}
  </div>

  <div slot="movies">
    {#each movies as movie}
      <CardHorizontal data={movie} />
    {/each}
  </div>
</TabGroup>
