<script lang="ts">
  import posterPlaceholder from '$images/posterPlaceholder.png';
  import DetailsOverlay from '$components/DetailsOverlay.svelte';

  export let data: any;

  let showDetails = false;

  function handleToggleDetails() {
    showDetails = !showDetails;
  }
</script>

<button class="card" on:click={handleToggleDetails}>
  <img
    src={data.poster_path ? `https://image.tmdb.org/t/p/w92/${data.poster_path}` : posterPlaceholder}
    loading="lazy"
    alt=""
  />
  <div>
    <h2 class="title">{data.name || data.title}</h2>
    <div class="release-date">{data.release_date || data.first_air_date}</div>
  </div>
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

  .card {
    margin-bottom: var(--size-base);
    text-align: left;
    display: flex;
    align-items: flex-start;
    gap: var(--size-base);
    width: 100%;
  }

  img {
    border-radius: var(--border-radius-small);
    width: 92px;
  }

  .release-date {
    color: var(--color-grey);
    font-size: var(--font-size-small);
  }
</style>
