<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import '$styles/normalize.css';
  import '$styles/reset.css';
  import '$styles/typography.scss';
  import '$styles/global.scss';
  import '$styles/vars.css';
</script>

<div class="wrapper">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
  }

  main {
    padding: var(--size-base) var(--size-base) 72px var(--size-base);
  }
</style>
