<script lang="ts">
  import posterPlaceholder from '$images/posterPlaceholder.png';
  import DetailsOverlay from '$components/DetailsOverlay.svelte';

  export let data: any;

  let showDetails = false;

  function handleToggleDetails() {
    showDetails = !showDetails;
  }
</script>

<button class="result" on:click={handleToggleDetails}>
  <img
    class="image"
    src={data.poster_path ? `https://image.tmdb.org/t/p/w92/${data.poster_path}` : posterPlaceholder}
    alt=""
  />
  <div class="title">{data.name || data.title}</div>
</button>

{#if showDetails}
  <DetailsOverlay on:close={handleToggleDetails} {data} />
{/if}

<style>
  button {
    background: none;
    border: none;
    padding: 0;
  }

  .result {
    margin-bottom: var(--size-base);
    text-align: left;
    display: flex;
    align-items: flex-start;
    gap: var(--size-base);
    width: 100%;
  }

  .title {
    margin: var(--size-small) var(--size-small) 0 var(--size-small);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  img {
    border-radius: var(--border-radius-small);
    width: 92px;
  }
</style>
