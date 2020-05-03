<script>
  import {
    signupWithEmailAndPassword as register,
    updateProfile
  } from "../modules/firebase.js";
  import CredentialsForm from "../components/CredentialsForm.svelte";
  import { currentUser } from "../stores/current-user.js";
  import router from "page.js";
  let feedback = null;

  const handleSignup = async event => {
    let user = event.detail;
    try {
      let cred = await register(user.email, user.password);
      await updateProfile({ displayName: user.displayName });
      feedback = null;
      router.redirect("/");
    } catch (error) {
      feedback = error.message;
    }
  };
</script>

<CredentialsForm type="Register" {feedback} on:register={handleSignup} />
