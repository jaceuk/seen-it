<script>
  import { goto } from '$app/navigation';
  import SearchSVG from '$components/svgs/SearchSVG.svelte';

  function handleToggleSearch() {
    goto('/search');
  }
</script>

<button on:click={handleToggleSearch}><SearchSVG /><span>Search TV shows & movies</span></button>

<style>
  button {
    display: flex;
    gap: var(--size-small);
    align-items: center;
    justify-content: flex-start;
    background: #ffffff;
    box-shadow: 0px 0px var(--size-small) rgba(0, 0, 0, 0.15);
    border-radius: var(--border-radius-small);
    border: none;
    padding: var(--size-small) var(--size-base);
    width: 100%;
  }

  button span {
    color: var(--color-grey);
  }
</style>
