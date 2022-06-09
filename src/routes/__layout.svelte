<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import '../styles/normalize.css';
  import '../styles/reset.css';
  import '../styles/typography.scss';
  import '../styles/global.scss';
  import '../styles/vars.css';
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    padding: var(--size-base) var(--size-base) 72px var(--size-base);
  }
</style>
