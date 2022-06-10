<script>
  import { page } from '$app/stores';
  import HomeSVG from '$components/svgs/HomeSVG.svelte';
  import WatchedSVG from '$components/svgs/WatchedSVG.svelte';
  import WatchListSVG from '$components/svgs/WatchListSVG.svelte';
  import RecommendedSVG from '$components/svgs/RecommendedSVG.svelte';
</script>

<footer>
  <nav>
    <a class:active={$page.url.pathname === '/'} href="/">
      <HomeSVG />
    </a>
    <a class:active={$page.url.pathname === '/watched'} href="/watched">
      <WatchedSVG />
    </a>
    <a class:active={$page.url.pathname === '/watch-list'} href="/watch-list">
      <WatchListSVG />
    </a>
    <a class:active={$page.url.pathname === '/recommended'} href="/recommended">
      <RecommendedSVG />
    </a>
    <span class="pill" />
  </nav>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    background-color: white;
    z-index: 200;
    padding: var(--size-small) 0;
    width: 100%;
    max-width: 900px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  }

  nav {
    width: 343px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  a {
    width: 40px;
    padding: var(--size-base);
    text-align: center;
    text-decoration: none;
    color: var(--color-nearly-black);
    width: 25%;
    height: 56px;
  }

  a:nth-child(1).active ~ .pill {
    transform: translatex(0px);
    transition: transform 0.2s ease-out;
  }

  a:nth-child(2).active ~ .pill {
    transform: translatex(86px);
    transition: transform 0.2s ease-out;
  }

  a:nth-child(3).active ~ .pill {
    transform: translatex(172px);
    transition: transform 0.2s ease-out;
  }

  a:nth-child(4).active ~ .pill {
    transform: translatex(258px);
    transition: transform 0.2s ease-out;
  }

  .pill {
    position: absolute;
    left: 0;
    top: 0;
    width: 86px;
    height: 56px;
    background: #f2f2f2;
    border-radius: 28px;
    z-index: -1;
    transition: 9999s transform 0.2s ease-out;
  }
</style>
