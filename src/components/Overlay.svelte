<script>
  import { focusTrap } from 'svelte-focus-trap';
</script>

<div class="overlay" use:focusTrap>
  <slot />
</div>

<style>
  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background: var(--color-white);
    top: 0;
    left: 0;
    right: 0;
    z-index: 300;
  }
</style>
