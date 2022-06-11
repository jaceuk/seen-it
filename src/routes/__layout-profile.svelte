<script>
  import ProfileHeader from '$components/ProfileHeader.svelte';
</script>

<div class="wrapper">
  <ProfileHeader />
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
  }

  main {
    padding: var(--size-base);
  }
</style>
