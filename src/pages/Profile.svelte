<script>
  import { currentUser } from "../stores/current-user";
  import { auth } from "../modules/firebase.js";

  export let params = {};
</script>

<h1>Profile Page</h1>
<p>Only authorized and logged in users can visit this page</p>
{#if auth.currentUser}
  <p>Authorized user: {auth.currentUser.email} [UID: {params.id}]</p>
  <p>Also known as: {auth.currentUser.displayName}</p>
{:else}
  <p>Unauthorized User Attack!!!</p>
{/if}
