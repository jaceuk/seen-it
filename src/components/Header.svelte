<script lang="ts">
  import { page } from '$app/stores';
  import ProfileSVG from '$components/svgs/ProfileSVG.svelte';
  import SearchButton from '$components/SearchButton.svelte';

  export let pageTitle: string;
</script>

<header>
  <div class="navbar">
    <h1>{pageTitle}</h1>

    <a class="profile" href="/profile">
      <ProfileSVG />
    </a>
  </div>

  <div class="search">
    <SearchButton />
  </div>
</header>

<style>
  header {
    background-color: var(--color-white);
    z-index: 200;
  }

  .navbar {
    padding: var(--size-small) var(--size-base);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search {
    background-color: var(--color-grey-light);
    padding: var(--size-base);
  }

  .profile {
    display: flex;
    padding: var(--size-small);
  }
</style>
