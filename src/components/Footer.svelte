<script>
  import { page } from '$app/stores';
</script>

<footer class="choice">
  <a class:active={$page.url.pathname === '/'} href="/">X</a>
  <a class:active={$page.url.pathname === '/watched'} href="/watched">X</a>
  <a class:active={$page.url.pathname === '/to-watch'} href="/to-watch">X</a>
  <a class:active={$page.url.pathname === '/recommended'} href="/recommended">X</a>
  <span class="pill" />
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    background-color: white;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px;
    width: 375px;
  }

  .choice {
    background-color: white;
    height: 56px;
    z-index: 1;
  }

  a {
    width: 40px;
    padding: 16px 16px;
    text-align: center;
    text-decoration: none;
    color: #000;
    width: 25%;
  }

  .pill {
    position: absolute;
    left: 0;
    top: 0;
    width: 94px;
    height: 56px;
    background: #b7d4e1;
    border-radius: 20px;
    z-index: -1;
    transition: 9999s transform 0.2s ease-out;
  }

  a:nth-child(1).active ~ .pill {
    transform: translatex(0px);
    transition: transform 0.2s ease-out;
  }

  a:nth-child(2).active ~ .pill {
    transform: translatex(94px);
    transition: transform 0.2s ease-out;
  }

  a:nth-child(3).active ~ .pill {
    transform: translatex(188px);
    transition: transform 0.2s ease-out;
  }

  a:nth-child(4).active ~ .pill {
    transform: translatex(282px);
    transition: transform 0.2s ease-out;
  }
</style>
