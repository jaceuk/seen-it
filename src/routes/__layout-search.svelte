<script>
  import SearchForm from '$components/SearchForm.svelte';
</script>

<div class="wrapper">
  <SearchForm />
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
