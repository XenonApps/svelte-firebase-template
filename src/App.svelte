<script>
  import Router from "./components/Router.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { currentUser } from "./stores/current-user";
</script>

<style>
  :global(body) {
    padding: 0;
  }
</style>

<svelte:head>
  <title>Xenon Apps</title>
  <!--Import Google Icon Font-->
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet" />
  <!-- Compiled and minified CSS -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
</svelte:head>

{#if $currentUser !== undefined}
  <Router>
    <Navbar />
  </Router>
{/if}
