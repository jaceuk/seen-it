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
    src={data.poster_path ? `https://image.tmdb.org/t/p/w154/${data.poster_path}` : posterPlaceholder}
    loading="lazy"
    alt=""
  />
  <div class="title">{data.name || data.title}</div>
</button>

{#if showDetails}
  <DetailsOverlay on:close={handleToggleDetails} {data} />
{/if}

<style lang="scss">
  button {
    background: none;
    border: none;
    padding: 0;
  }

  .result {
    min-width: 40vw;
    width: 40vw;
    margin-bottom: var(--size-base);
    text-align: left;

    @media (min-width: 500px) {
      min-width: 20vw;
      width: 20vw;
    }

    @media (min-width: 821px) {
      min-width: 150px;
      width: 150px;
    }
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
    width: 100%;
  }
</style>
