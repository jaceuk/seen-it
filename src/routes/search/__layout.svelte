<script>
  import HeaderBack from '$components/HeaderBack.svelte';
  import SearchForm from '$components/SearchForm.svelte';
  import '$styles/normalize.css';
  import '$styles/reset.css';
  import '$styles/typography.scss';
  import '$styles/global.scss';
  import '$styles/vars.css';
</script>

<HeaderBack slot="header"><SearchForm /></HeaderBack>

<main>
  <slot />
</main>

<style>
  main {
    padding: var(--size-base);
    height: 100%;
  }
</style>
