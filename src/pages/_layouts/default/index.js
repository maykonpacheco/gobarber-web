import React from "react";
import Prototype from "prop-types";

import Header from "~/components/Header";

import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.prototype = {
  children: Prototype.element.isRequired
};
