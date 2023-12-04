import Button from "../Button/Button";
import { HeaderContainer, Logo } from "./styles";
import { ReactComponent as SearchIcon } from "../../Assets/Icon-feather-search.svg";
import { useState } from "react";

interface Props {
  personalize: () => void;
  isFilled?: boolean;
  isSearch?: boolean;
  searchFn?: (value: string) => void;
}

function Header({ personalize, isFilled, isSearch, searchFn }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const SubmitSearch = (e: any) => {
    e.preventDefault();
    if (searchFn) {
      searchFn(searchValue);
    } else return;
  };
  return (
    //TODO: test this
    <HeaderContainer className={isFilled ? "filled" : ""}>
      <Logo href="#!" className="logo animated fadeIn">
        Emerald hub.
      </Logo>

      {!isSearch ? (
        <p className="animated fadeInUp delay2">
          Articles, news and updates from your favorite sources.
        </p>
      ) : (
        <form onSubmit={SubmitSearch}>
          <input
            placeholder="Find an author"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button variant="filled">Search</Button>
        </form>
      )}

      <div style={{ display: "flex" }}>
        <Button variant="filled" className="delay3 icon">
          <SearchIcon />
        </Button>
        <Button
          className="delay4"
          onClick={personalize}
          style={{ marginLeft: 10 }}
        >
          Personalize feed
        </Button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
