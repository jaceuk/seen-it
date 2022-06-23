<script context="module" lang="ts">
  import { fetchData } from './fetchData.json';
  interface ILoad {
    fetch: any;
    params: any;
  }

  export async function load({ fetch, params }: ILoad) {
    const shows = await fetchData('', params.term, 'tv', 1);
    const movies = await fetchData('', params.term, 'movie', 1);

    return {
      props: {
        term: params.term,
        shows: { results: shows.results, totalPages: shows.totalPages, totalResults: shows.totalResults },
        movies: { results: movies.results, totalPages: movies.totalPages, totalResults: movies.totalResults },
      },
    };
  }
</script>

<script lang="ts">
  import { inview } from 'svelte-inview';
  import CardHorizontal from '$components/CardHorizontal.svelte';
  import TabGroup from '$components/TabGroup.svelte';
  import BackToTopButton from '$components/BackToTopButton.svelte';

  export let shows: any;
  export let movies: any;
  export let term: string;

  let page = 1;

  let isInView: boolean;
  interface IProps {
    detail: any;
  }

  async function getMoreMovies({ detail }: IProps) {
    isInView = detail.inView;
    if (!isInView || page === movies.totalPages) return;

    page++;
    movies = await fetchData(movies.results, term, 'movie', page);
  }

  async function getMoreShows({ detail }: IProps) {
    isInView = detail.inView;
    if (!isInView || page === shows.totalPages) return;

    page++;
    shows = await fetchData(shows.results, term, 'tv', page);
  }
</script>

<svelte:head>
  <title>Search results</title>
</svelte:head>

<!-- TODO: add loading spinner to anywhere that calls to an API -->

<TabGroup totalMovies={movies.totalResults} totalShows={shows.totalResults} slot="main">
  <div slot="shows">
    {#if shows.results.length > 0}
      {#each shows.results as result}
        <CardHorizontal data={result} />
      {/each}
    {:else}
      No TV shows found for '<span class="term">{term}</span>'
    {/if}
    <div use:inview={{}} on:enter={getMoreShows} />
  </div>

  <div slot="movies">
    {#if movies.results.length > 0}
      {#each movies.results as result}
        <CardHorizontal data={result} />
      {/each}
    {:else}
      No movies found for '<span class="term">{term}</span>'
    {/if}
    <div use:inview={{}} on:enter={getMoreMovies} />
  </div>
</TabGroup>

<BackToTopButton />

<style>
  .term {
    font-weight: bold;
  }
</style>
