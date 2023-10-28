export const authErrors: Record<string, string> = {
  'auth/wrong-password': 'The password is invalid or the user does not have a password.',
  'auth/email-already-exists':
    'The provided email is already in use by an existing user. Each user must have a unique email.',
  'auth/invalid-password':
    'The provided value for the password user property is invalid. It must be a string with at least six characters.',
  'auth/credential-already-in-use': 'This credential is already associated with a different user account.',
  'auth/requires-recent-login':
    'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
  'auth/email-already-in-use': 'The email address is already in use by another account.',
  'auth/invalid-email': 'The email address is badly formatted.',
  'auth/timeout': 'The operation has timed out.',
  'auth/too-many-requests': 'We have blocked all requests from this device due to unusual activity. Try again later.',
  'auth/unverified-email': 'The operation requires a verified email.',
  'auth/user-not-found': 'There is no user record corresponding to this identifier. The user may have been deleted.',
  'auth/weak-password': 'The password must be 6 characters long or more.',
};
