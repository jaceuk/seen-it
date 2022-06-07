<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import '../styles/normalize.css';
  import '../styles/reset.css';
  import '../styles/global.scss';
</script>

<div class="container">
  <Header />
  <slot />
  <Footer />
</div>

<style>
  .container {
    padding: 32px 0;
    width: 375px;
    height: 100vh;
  }
</style>
