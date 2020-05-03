import { currentUser } from '../stores/current-user';
import { auth } from './firebase';

auth.onAuthStateChanged((user) => {
  if (user) {
    currentUser.set({
      email: user.email,
      id: user.uid,
      phoneNumber: user.phoneNumber,
      photoUrl: user.photoUrl,
      displayName: user.displayName,
    });
  } else {
    currentUser.reset();
  }
});
