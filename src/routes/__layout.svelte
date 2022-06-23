<script>
  import '$styles/normalize.css';
  import '$styles/reset.css';
  import '$styles/typography.scss';
  import '$styles/global.scss';
  import '$styles/vars.css';
</script>

<div class="wrapper">
  <slot />
</div>

<style>
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    height: 100vh;
  }
</style>
