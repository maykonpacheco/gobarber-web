export function SignInResquest(email, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password }
  };
}

export function SignInSucess(token, user) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { token, user }
  };
}

export function signFailure() {
  return { type: "@auth/SIGN_FAILURE" };
}
