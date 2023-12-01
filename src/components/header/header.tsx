import Button from "../Button/Button";
import { HeaderContainer, Logo } from "./styles";
import { ReactComponent as SearchIcon } from "../../Assets/Icon-feather-search.svg";

function Header() {
  return (
    <HeaderContainer>
      <Logo href="#!" className="logo animated fadeIn">
        Emerald Spot.
      </Logo>
      <p className="animated fadeInUp delay2">
        Articles, news and updates from your favorite sources
      </p>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <Button variant="filled" className="delay3">
          <SearchIcon />
        </Button>
        <Button className="delay4">Personalize feed</Button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
