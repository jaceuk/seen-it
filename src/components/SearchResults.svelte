<script lang="ts">
  import CardHorizontal from '$components/CardHorizontal.svelte';
  import { page } from '$app/stores';

  export let type: string;

  let term = $page.params.term;

  async function getResults() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${term}`,
    );
    const data = await response.json();

    if (response.ok) {
      return {
        status: response.status,
        page: data.page,
        totalPages: data.total_pages,
        totalResults: data.total_results,
        data: data.results,
      };
    } else {
      throw new Error(data.status_message);
    }
  }

  const results: any = getResults();
</script>

{#await results}
  <p>...waiting</p>
{:then results}
  {#if results.data}
    {#each results.data as result}
      <CardHorizontal data={result} />
    {/each}
  {:else}
    No results found for '<span class="term">{term}</span>'
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .term {
    font-weight: var(--font-weight-semi-bold);
  }
</style>
