import React from "react";
import Prototype from "prop-types";
import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.prototype = {
  children: Prototype.element.isRequired
};
