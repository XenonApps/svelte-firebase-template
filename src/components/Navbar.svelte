<script>
  import router from "page.js";
  import { auth } from "../modules/firebase.js";
  import { currentUser } from "../stores/current-user";

  let isLoggedIn = false;

  $: if ($currentUser) {
    isLoggedIn = true;
  } else {
    false;
  }

  const logout = async () => {
    await auth.signOut();
    router.redirect("/");
  };
</script>

<style>
  nav a {
    color: white;
  }
</style>

<div class="navbar">
  <nav class="deep-purple">
    <div class="container">
      <a href="/" class="brand-logo left">XenonApps!</a>
      <ul class="right">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        {#if $currentUser}
          <li>
            <a href="/profile/{$currentUser.id}">Profile</a>
          </li>
        {/if}
        {#if $currentUser}
          <li>
            <a href="/contacts">Contacts</a>
          </li>
        {/if}
        {#if !$currentUser}
          <li>
            <a href="/login">Login</a>
          </li>
        {/if}
        {#if !$currentUser}
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        {/if}
        <!-- {#if $currentUser}
          <li>
            <a href="#null">{$currentUser.email}</a>
          </li>
        {/if} -->
        {#if $currentUser}
          <li>
            <a href="#null" on:click={logout}>Sign out</a>
          </li>
        {/if}
      </ul>
    </div>
  </nav>
</div>
