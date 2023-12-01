import React from "react";
import { HeaderContainer } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <a href="#!" className="logo">
        Emerald Spot.
      </a>
      <p>Articles, news and updates from your favorite sources</p>
    </HeaderContainer>
  );
}

export default Header;
