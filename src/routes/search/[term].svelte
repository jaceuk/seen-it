<script context="module" lang="ts">
  interface ILoad {
    fetch: any;
    params: any;
  }

  export async function load({ fetch, params }: ILoad) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${params.term}`,
      );
      const data = await res.json();
      if (res.ok) {
        return {
          status: 200,
          props: { results: data.results },
        };
      } else {
        return {
          status: 400,
          props: { error: data.status_message },
        };
      }
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        props: { error: error },
      };
    }
  }
</script>

<script lang="ts">
  export let results: any;
  export let error: any;
</script>

{#if error}
  <p>{error}</p>
{:else}
  {#each results as result}
    <p>{result.title}</p>
  {/each}
{/if}
