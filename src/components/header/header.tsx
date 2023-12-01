import Button from "../Button/Button";
import { HeaderContainer, Logo } from "./styles";
import { ReactComponent as SearchIcon } from "../../Assets/Icon-feather-search.svg";

function Header() {
  return (
    <HeaderContainer>
      <Logo href="#!" className="logo">
        Emerald Spot.
      </Logo>
      <p>Articles, news and updates from your favorite sources</p>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <Button variant="filled">
          <SearchIcon />
        </Button>
        <Button>Personalize feed</Button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
