<script lang="ts">
  let selectedTab = 1;
</script>

<div role="tablist" aria-orientation="horizontal">
  <button
    on:click={() => (selectedTab = 1)}
    role="tab"
    aria-selected={selectedTab === 1 ? 'true' : 'false'}
    id="tv-tab"
    aria-controls="tv-content-panel">TV shows</button
  >
  <button
    on:click={() => (selectedTab = 2)}
    role="tab"
    aria-selected={selectedTab === 2 ? 'true' : 'false'}
    id="movies-tab"
    aria-controls="movies-content-panel">Movies</button
  >
  <span class="underline" />
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
  }

  button[aria-selected='false'] {
    color: var(--color-grey);
    border-color: transparent;
  }

  .underline {
    height: 2px;
    background-color: var(--color-nearly-black);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 74px;
    border-radius: 2px;
    z-index: -1;
    transition: 9999s transform 0.2s ease-out;
  }

  button:nth-child(1)[aria-selected='true'] ~ .underline {
    transform: translatex(0px);
    transition: transform 0.2s ease-out;
  }

  button:nth-child(2)[aria-selected='true'] ~ .underline {
    transform: translatex(90px);
    transition: transform 0.2s ease-out;
    width: 55px;
  }
</style>
