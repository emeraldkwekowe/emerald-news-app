import { ModalForm } from "../styles";
import Button from "../../../../../components/Button/Button";
import { ReactComponent as SearchIcon } from "../../../../../Assets/Icon-feather-search.svg";

interface Props {
  endpoint?: string;
}

function SearchForm(props: Props) {
  const { endpoint } = props;
  console.log(endpoint);
  return (
    <ModalForm>
      <input placeholder="Find an author" />
      <Button variant="filled" className="icon">
        <SearchIcon />
      </Button>
    </ModalForm>
  );
}

export default SearchForm;
