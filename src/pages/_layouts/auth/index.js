import React from "react";
import Prototype from "prop-types";
import { Wrapper, Content } from "./styles";

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.prototype = {
  children: Prototype.element.isRequired
};
