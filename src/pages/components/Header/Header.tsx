import { HeaderContainer, Logo } from "./styles";
import { ReactComponent as SearchIcon } from "../../../Assets/Icon-feather-search.svg";
import { ReactComponent as HomeIcon } from "../../../Assets/Icon-metro-home.svg";
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";

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
    <HeaderContainer
      data-testid="header-component"
      className={isFilled ? "filled" : ""}
    >
      <Link to="/">
        <Logo>News hub.</Logo>
      </Link>

      {!isSearch ? (
        <p
          className="animated fadeInUp delay1 ___hidden_on_responsive"
          style={{ marginRight: "auto" }}
        >
          Articles, news and updates from your favorite sources.
        </p>
      ) : (
        <form onSubmit={SubmitSearch}>
          <input
            placeholder="e.g Donald Trump"
            autoFocus
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
          <Link to="/" className="___hidden_on_responsive">
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
