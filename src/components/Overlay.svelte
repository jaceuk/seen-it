<script>
  import { focusTrap } from 'svelte-focus-trap';
</script>

<div class="overlay" use:focusTrap>
  <slot />
</div>

<style>
  .overlay {
    max-width: 900px;
    margin: 0 auto;
    height: 100%;
    position: fixed;
    background: var(--color-white);
    top: 0;
    left: 0;
    right: 0;
    z-index: 300;
  }
</style>
