<script>
  import SearchHeader from '$components/SearchHeader.svelte';
</script>

<div class="wrapper">
  <SearchHeader />
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
  }

  main {
    padding: var(--size-base);
  }
</style>
