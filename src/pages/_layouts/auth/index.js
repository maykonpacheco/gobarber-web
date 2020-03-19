import React from "react";
import Prototype from "prop-types";
import { Wrapper } from "./styles";

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.prototype = {
  children: Prototype.element.isRequired
};
