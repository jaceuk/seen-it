<script>
  import HeaderBack from '$components/HeaderBack.svelte';

  import '$styles/normalize.css';
  import '$styles/reset.css';
  import '$styles/typography.scss';
  import '$styles/global.scss';
  import '$styles/vars.css';
</script>

<HeaderBack slot="header"><h1>Profile</h1></HeaderBack>

<main>
  <slot />
</main>

<style>
  main {
    padding: var(--size-base);
    height: 100%;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: var(--font-size-medium);
    font-weight: normal;
    color: var(--color-nearly-black);
  }
</style>
