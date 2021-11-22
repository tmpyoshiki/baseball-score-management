import React from "react";
import { Reset } from "styled-reset";

interface Props {
  title: string;
}

const Header = ({ title }: Props): JSX.Element => (
  <head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <Reset />
  </head>
);

export default Header;
