import { writable } from 'svelte/store';

function createCurrentUser() {
  const { subscribe, set, update } = writable(undefined);

  return {
    subscribe,
    set: (userInfo) => {
      set(userInfo);
    },
    reset: () => set(null),
  };
}

export const currentUser = createCurrentUser();
