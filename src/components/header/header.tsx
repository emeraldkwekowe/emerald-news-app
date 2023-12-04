import Button from "../Button/Button";
import { HeaderContainer, Logo } from "./styles";
import { ReactComponent as SearchIcon } from "../../Assets/Icon-feather-search.svg";
import { ReactComponent as HomeIcon } from "../../Assets/Icon-metro-home.svg";
import { memo, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  personalize?: () => void;
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
      <Link to="/">
        <Logo className="logo animated fadeIn">News hub.</Logo>
      </Link>

      {!isSearch ? (
        <p className="animated fadeInUp delay2" style={{ marginRight: "auto" }}>
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
        {!isSearch ? (
          <Link to="/search">
            <Button variant="filled" className="delay2 icon">
              <SearchIcon />
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button variant="filled" className="delay2 icon">
              <HomeIcon />
            </Button>
          </Link>
        )}

        {!isSearch && (
          <Button
            className="delay2"
            onClick={personalize}
            style={{ marginLeft: 10 }}
          >
            Personalize feed
          </Button>
        )}
      </div>
    </HeaderContainer>
  );
}

export default memo(Header);
