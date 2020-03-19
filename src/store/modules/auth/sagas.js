import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "~/services/history";
import { SignInSucess } from "./actions";

import api from "~/services/api";

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, "sessions", {
    email,
    password
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error("Usuário não é prestador");
  }

  yield put(SignInSucess(token, user));

  history.pushState("/dashboard");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
