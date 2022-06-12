<script lang="ts">
  import { browser } from '$app/env';
  import ChevronUpSvg from '$components/svgs/ChevronUpSvg.svelte';

  let buttonRef: any;

  if (browser) {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      buttonRef.style.display = 'flex';
    } else {
      buttonRef.style.display = 'none';
    }
  }

  function handleBackToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
</script>

<button on:click={handleBackToTop} bind:this={buttonRef} aria-label="Back to top"><ChevronUpSvg /></button>

<style>
  button {
    position: sticky;
    bottom: var(--size-base);
    transform: translateX(-50%);
    left: 50%;
    background-color: var(--color-white);
    border: 1px solid var(--color-nearly-black);
    padding: var(--size-small);
    border-radius: var(--border-radius-max);
    display: none;
  }
</style>
