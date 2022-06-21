<script>
  import { page } from '$app/stores';
  import ProfileHeader from '$components/ProfileHeader.svelte';
  import SearchHeader from '$components/SearchHeader.svelte';
  import '$styles/normalize.css';
  import '$styles/reset.css';
  import '$styles/typography.scss';
  import '$styles/global.scss';
  import '$styles/vars.css';
</script>

<div class="wrapper">
  {#if $page.url.pathname.startsWith('/profile')}
    <ProfileHeader />
  {/if}
  {#if $page.url.pathname.startsWith('/search')}
    <SearchHeader />
  {/if}
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    height: 100vh;
  }

  main {
    padding: var(--size-base);
    height: 100%;
  }
</style>
