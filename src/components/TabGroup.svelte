<script lang="ts">
  export let totalShows = 0;
  export let totalMovies = 0;

  let selectedTab = 1;
</script>

<div role="tablist" aria-orientation="horizontal">
  <button
    on:click={() => (selectedTab = 1)}
    role="tab"
    aria-selected={selectedTab === 1 ? 'true' : 'false'}
    id="tv-tab"
    aria-controls="tv-content-panel"
    ><span>TV shows</span>{#if totalShows}<span class="count">({totalShows})</span>{/if}
  </button>

  <button
    on:click={() => (selectedTab = 2)}
    role="tab"
    aria-selected={selectedTab === 2 ? 'true' : 'false'}
    id="movies-tab"
    aria-controls="movies-content-panel"
    ><span>Movies</span>{#if totalMovies}<span class="count">({totalMovies})</span>{/if}
  </button>
</div>

{#if selectedTab === 1}
  <div id="tv-content-panel" role="tabpanel" aria-labelledby="tv-tab">
    <slot name="shows" />
  </div>
{/if}

{#if selectedTab === 2}
  <div id="movies-content-panel" role="tabpanel" aria-labelledby="movies-tab">
    <slot name="movies" />
  </div>
{/if}

<style>
  .count {
    font-size: var(--font-size-extra-small);
  }

  [role='tablist'] {
    display: flex;
    gap: var(--size-base);
    margin-bottom: var(--size-base);
    position: relative;
  }

  button {
    background: none;
    border: none;
    padding: 0 0 var(--size-extra-small) 0;
    text-align: left;
    display: flex;
    align-items: center;
    gap: var(--size-extra-small);
    border-bottom: 2px solid var(--color-red);
  }

  button[aria-selected='false'] {
    color: var(--color-grey);
    border-color: transparent;
  }
</style>
