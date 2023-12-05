import Button from "../../../../../components/Button/Button";
import useUserPreferences from "../../../../../context/UserPreferences/UseUserPreferences";
import { DEFAULT_SOURCES } from "../../../../../helpers/constants";
import { CategoriesContainer, CategoryButton } from "../../NewsList/styles";
import { ModalFooter } from "../styles";
import { ReactComponent as CloseIcon } from "../../../../../Assets/close.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { SourcesObjectType } from "../../../../../context/UserPreferences/types";
import SearchForm from "./SearchForm";

function PersonalizeSources({
  back,
  returnToFeed,
}: {
  back: () => void;
  returnToFeed: () => void;
}) {
  const { mySources, updatePreferences } = useUserPreferences();

  //Get preffered Sources from user preferences or use top authors if no preferences set
  const SOURCES = mySources || DEFAULT_SOURCES.default;

  const [selectedSources, setSelectedSources] =
    useState<SourcesObjectType[]>(SOURCES);

  const modifySources = (source: SourcesObjectType) => {
    const array = new Array(...selectedSources);
    const index = array.indexOf(source);
    //If item is not present in array
    if (index === -1) {
      //add item
      array.push(source);
    } else {
      //remove item
      array.splice(index, 1);
    }
    setSelectedSources(array);
  };

  const Submit = () => {
    updatePreferences("sources", selectedSources);
    toast.success("Sources updated successfully!");
    returnToFeed();
  };

  return (
    <>
      <h3>What sources do you want news from?</h3>
      <p>
        Select up to 15 news sources for your news feed. The top sources have
        already been added for you.
      </p>
      {/* <SearchForm /> */}

      <SearchForm
        title="sources"
        currentList={Array.from(selectedSources, (item) => item.title)}
        addToListFn={(source) => modifySources(source)}
      />

      <h4>Selected Sources</h4>

      <CategoriesContainer className="animated fadeInUp">
        {selectedSources?.length ? (
          selectedSources?.map((category: SourcesObjectType) => (
            <CategoryButton
              key={category?.uri}
              className="item__a"
              onClick={() => modifySources(category)}
            >
              {category?.title}
              <CloseIcon />
            </CategoryButton>
          ))
        ) : (
          <p>Use all sources (default when no sources are selected)</p>
        )}
      </CategoriesContainer>
      <ModalFooter>
        <Button className="delay1" onClick={back}>
          Go back
        </Button>
        <Button className="delay1" variant="filled" onClick={Submit}>
          Submit
        </Button>
      </ModalFooter>
    </>
  );
}

export default PersonalizeSources;
