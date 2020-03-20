import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { signOut } from "~/store/modules/auth/actions";
import { updateProfileRequest } from "~/store/modules/user/actions";

import AvatarInput from "./AvatarInput/";

import { Container } from "./styles";

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handlesignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Name completo" />
        <Input name="email" placeholder="Seu endereço de email" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button onClick={handlesignOut} type="button">
        Sair do GoBarber
      </button>
    </Container>
  );
}
