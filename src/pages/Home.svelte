<script>
  import { currentUser } from "../stores/current-user.js";
</script>

<h1>Home Page</h1>
{#if $currentUser}
  <p>Welcome, {$currentUser.email}</p>
{/if}
