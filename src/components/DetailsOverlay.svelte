<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Overlay from '$components/Overlay.svelte';
  import ArrowLeftSVG from '$components/svgs/ArrowLeftSVG.svelte';
  import backdropPlaceholder from '$images/backdropPlaceholder.png';

  export let data: any;

  const dispatch = createEventDispatcher();

  function handleBack() {
    dispatch('close');
  }
</script>

<Overlay>
  <button class="back-button" on:click={handleBack} aria-label="Back"><ArrowLeftSVG /></button>
  <div class="backdrop">
    <img
      class="image"
      src={data.backdrop_path ? `https://image.tmdb.org/t/p/w400/${data.backdrop_path}` : backdropPlaceholder}
      alt=""
    />
  </div>
  <main>
    <h1 class="title">{data.name || data.title}</h1>
  </main>
</Overlay>

<style>
  .backdrop {
    aspect-ratio: 16/9;
    width: 100%;
  }

  .title {
    font-family: 'Poppins', sans-serif;
    color: var(--color-nearly-black);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .back-button {
    background-color: var(--color-white);
    border: 1px solid var(--color-nearly-black);
    display: flex;
    padding: var(--size-small);
    border-radius: var(--border-radius-max);
    position: absolute;
    top: var(--size-base);
    left: var(--size-base);
  }

  main {
    padding: var(--size-base);
  }
</style>
