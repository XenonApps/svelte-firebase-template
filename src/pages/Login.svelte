<script>
  import { loginWithEmailAndPassword as login } from "../modules/firebase.js";
  import CredentialsForm from "../components/CredentialsForm.svelte";
  import router from "page.js";

  let feedback = null;

  const handleLogin = async event => {
    let cred = { ...event.detail };
    try {
      await login(cred.email, cred.password);
      router.redirect("/");
    } catch (error) {
      feedback = error.message;
    }
  };
</script>

<CredentialsForm type="Login" {feedback} on:login={handleLogin} />
