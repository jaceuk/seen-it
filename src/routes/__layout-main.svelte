<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import '$styles/normalize.css';
  import '$styles/reset.css';
  import '$styles/typography.scss';
  import '$styles/global.scss';
  import '$styles/vars.css';

  let pageTitle: string;
  if ($page.url.pathname === '/home' || $page.status === 404) pageTitle = 'Seen Machine';
  if ($page.url.pathname === '/watched') pageTitle = 'Watched';
  if ($page.url.pathname === '/watch-list') pageTitle = 'Watch list';
  if ($page.url.pathname === '/recommended') pageTitle = 'Recommended';
</script>

<div class="wrapper">
  <Header {pageTitle} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  main {
    padding: var(--size-base) var(--size-base) 72px var(--size-base);
  }
</style>
