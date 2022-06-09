<script lang="ts">
  import placeholder from '$images/placeholder.png';
  import Details from '$components/Details.svelte';

  export let data: any;

  let showDetails = false;

  function handleToggleDetails() {
    showDetails = !showDetails;
  }
</script>

<button class="result" on:click={handleToggleDetails}>
  <img
    class="image"
    src={data.poster_path ? `https://image.tmdb.org/t/p/w200/${data.poster_path}` : placeholder}
    alt=""
  />
  <div class="title">{data.name || data.title}</div>
</button>

{#if showDetails}
  <Details on:close={handleToggleDetails}>Overlay content here</Details>
{/if}

<style>
  button {
    background: none;
    border: none;
    padding: 0;
  }

  .result {
    min-width: 150px;
    width: 150px;
    margin-bottom: var(--size-base);
    text-align: left;
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
  }
</style>
