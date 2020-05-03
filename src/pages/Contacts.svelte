<script>
  import { addListener } from "../modules/firestore-collection.js";
  import { onDestroy } from "svelte";

  let contacts = [];

  const alphabeticName = contact =>
    [contact.lastName, contact.firstName].join(" ");
  const fullName = contact => [contact.firstName, contact.lastName].join(" ");
  const contactComparer = (a, b) =>
    alphabeticName(a).localeCompare(alphabeticName(b));

  onDestroy(
    /* unsubscribe on destroy */
    addListener("contacts", changes => {
      let list = [...contacts];
      changes.forEach(change => {
        switch (change.type) {
          case "added":
            list.push({ id: change.id, ...change.data });
            break;
          case "modified":
            let ix = list.findIndex(c => c.id === change.id);
            list[ix] = { id: change.id, ...change.data };
            break;
          case "removed":
            contacts = list.filter(c => c.id !== change.id);
            return;

          default:
            console.log("Unexpected change in 'contacts' collection:", change);
            return;
        }
      });
      list.sort(contactComparer);
      contacts = [...list];
    })
  );
</script>

<h1>Contacts List</h1>
{#each contacts as contact (contact.id)}
  <p>
    {fullName(contact)}
    {#if contact.emails && contact.emails.length > 0}- {contact.emails[0]}{/if}
  </p>
{/each}
