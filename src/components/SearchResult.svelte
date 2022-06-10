<script lang="ts">
  import Details from '$components/Details.svelte';

  let showDetails = false;

  function handleToggleDetails() {
    showDetails = !showDetails;
  }
</script>

<div>
  <button on:click={handleToggleDetails}><slot /></button>
</div>

{#if showDetails}
  <Details on:close={handleToggleDetails}>Overlay content here</Details>
{/if}

<style>
  button {
    padding: 32px;
    background-color: white;
  }
</style>
