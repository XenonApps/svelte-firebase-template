<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let type = "login";
  export let feedback = null;

  let user = {
    email: null,
    password: null,
    displayName: null
  };
  let infoMessage = feedback;

  const onSubmit = () => {
    // raise event to parent
    dispatch(type.toLowerCase(), user);
  };
</script>

<style>
  .credentials {
    max-width: 400px;
    margin-top: 60px;
  }
  h2 {
    font-size: 2.4rem;
  }
  .field {
    margin-bottom: 16px;
  }
  .field input {
    height: 2rem;
  }
</style>

<div class="credentials container">
  <form on:submit|preventDefault={onSubmit} class="card-panel">
    <h2 class="center deep-purple-text">{type}</h2>
    <div class="field">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={user.email}
        required />
    </div>
    <div class="field">
      <label for="password">Password (minimum 6 characters):</label>
      <input
        type="password"
        id="password"
        name="password"
        bind:value={user.password}
        required />
    </div>
    {#if type !== 'Login'}
      <div class="field">
        <label for="displayName">Display name:</label>
        <input
          type="text"
          id="displayName"
          name="displayName"
          bind:value={user.displayName}
          required />
      </div>
    {/if}
    {#if infoMessage || feedback}
      <p class="red-text center">{infoMessage || feedback}</p>
    {/if}
    <div class="field center">
      <button type="submit" class="btn deep-purple">Submit</button>
    </div>
  </form>
</div>
