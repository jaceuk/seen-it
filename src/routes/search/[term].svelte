<script context="module" lang="ts">
  interface ILoad {
    fetch: any;
    params: any;
  }

  export async function load({ fetch, params }: ILoad) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${params.term}`,
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        return {
          status: response.status,
          props: { results: data.results },
        };
      } else {
        return {
          status: 500,
        };
      }
    } catch (error) {
      console.error(error);
      return {
        status: 500,
      };
    }
  }
</script>

<script lang="ts">
  import SearchResult from '$components/SearchResult.svelte';

  export let results: any;
</script>

{#if !results}
  <p>Error</p>
{:else}
  {#each results as result}
    <SearchResult>{result.title}</SearchResult>
  {/each}
{/if}
