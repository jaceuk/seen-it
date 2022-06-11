<script context="module" lang="ts">
  interface ILoad {
    status: number;
    error: any;
  }

  export function load({ status, error }: ILoad) {
    return {
      props: {
        status,
        message: error.message,
      },
    };
  }
</script>

<script lang="ts">
  export let status: number;
  export let message: string;

  console.error(message);
</script>

<div class="stack">
  {#if status == 404}
    <h1>Error 404</h1>
    <h2>This is not the page you're looking for.</h2>
  {:else}
    <h1>Error 500</h1>
    <h2>It's seems as if something has gone wrong.</h2>
    <p>This is a problem on our side, please try again.</p>
  {/if}
</div>
