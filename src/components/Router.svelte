<script>
  import router from "page.js";
  import { currentUser } from "../stores/current-user";

  // Include our Routes
  import Home from "../pages/Home.svelte";
  import Login from "../pages/Login.svelte";
  import Signup from "../pages/Register.svelte";
  import Contact from "../pages/Contact.svelte";
  import About from "../pages/About.svelte";
  import Profile from "../pages/Profile.svelte";

  // Variables
  let page;
  let params;

  // Set up the pages to watch for
  router("/", () => (page = Home));
  router("/login", () => (page = Login));
  router("/signup", () => (page = Signup));
  router("/contact", () => (page = Contact));
  router("/about", () => (page = About));
  // pass parameters encoded in route
  router("/profile/:id", ctx => loggedInGuard(Profile, ctx.params));
  router("/*", () => (page = Login));

  // Set up the router to start and actively watch for changes
  router.start();

  function loggedInGuard(pageTo, parameters) {
    if ($currentUser) {
      page = pageTo;
      params = parameters;
    } else {
      page = Login;
      params = null;
    }
  }
</script>

<main>
  <slot />
  <svelte:component this={page} {params} />
</main>
