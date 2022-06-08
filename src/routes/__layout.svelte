<script>
  import Header from '$components/shared/Header.svelte';
  import Footer from '$components/shared/Footer.svelte';
  import Main from '$components/shared/Main.svelte';
  import '../styles/normalize.css';
  import '../styles/reset.css';
  import '../styles/typography.scss';
  import '../styles/global.scss';
  import '../styles/vars.css';
</script>

<Header />
<Main>
  <slot />
</Main>
<Footer />
