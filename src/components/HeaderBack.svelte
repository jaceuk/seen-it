<script lang="ts">
  import ArrowLeftSVG from '$components/svgs/ArrowLeftSVG.svelte';

  function handleBack() {
    window.history.back();
  }
</script>

<header>
  <button class="back-button" on:click={handleBack} aria-label="Back"><ArrowLeftSVG /></button>
  <slot />
</header>

<style>
  header {
    background-color: var(--color-white);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    padding: var(--size-base);
    display: flex;
    align-items: center;
    gap: var(--size-base);
  }

  .back-button {
    background: none;
    border: none;
    display: flex;
    padding: var(--size-small);
  }
</style>
