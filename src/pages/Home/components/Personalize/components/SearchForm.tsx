import {
  ModalForm,
  ModalFormContainer,
  ModalFormResults,
  SuggestedItem,
} from "../styles";
import Button from "../../../../../components/Button/Button";
import { ReactComponent as SearchIcon } from "../../../../../Assets/Icon-feather-search.svg";
import { useState } from "react";
import {
  DEFAULT_CATEGORIES,
  DEFAULT_SOURCES,
  TOP_AUTHORS,
} from "../../../../../helpers/constants";
import { getAuthorName } from "./PersonalizeAuthors";

interface Props {
  title: "categories" | "authors" | "sources";
  currentList: string[] | {}[];
  addToListFn: (category: any) => void;
}

function SearchForm(props: Props) {
  const { title, addToListFn, currentList } = props;
  const [filterResults, setFilterResults] = useState<any>([]);

  //Define the source of data for the filter

  const filterThrough = (searchTerm: string) => {
    const filterWithString = (object: {
      default: string[];
      others: string[];
    }) => {
      const sourceList = [...object.default, ...object.others];
      setFilterResults(
        sourceList.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    };

    switch (title) {
      case "authors":
        filterWithString(TOP_AUTHORS);
        break;

      case "categories":
        filterWithString(DEFAULT_CATEGORIES);
        break;

      case "sources":
        const sourceList = [
          ...DEFAULT_SOURCES.default,
          ...DEFAULT_SOURCES.others,
        ];
        setFilterResults(
          sourceList.filter((item) =>
            item?.title?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
        );
        break;

      default:
        break;
    }
  };

  return (
    <ModalFormContainer>
      <ModalForm>
        <input
          placeholder="Find an item to add to the list"
          onChange={(e) => filterThrough(e.target.value)}
        />
        <Button variant="filled" className="icon">
          <SearchIcon />
        </Button>
      </ModalForm>
      <ModalFormResults>
        {filterResults.map((item: any) => {
          const itemValue = item?.title || item;
          return (
            <SuggestedItem key={itemValue}>
              <p>
                {title === "authors" ? getAuthorName(itemValue) : itemValue}
              </p>
              {currentList?.includes(itemValue) ? (
                <Button onClick={() => addToListFn(item)}>Remove</Button>
              ) : (
                <Button variant="filled" onClick={() => addToListFn(item)}>
                  Add
                </Button>
              )}
            </SuggestedItem>
          );
        })}
      </ModalFormResults>
    </ModalFormContainer>
  );
}

export default SearchForm;
