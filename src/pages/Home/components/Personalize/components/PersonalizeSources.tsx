import Button from "../../../../../components/Button/Button";
import useUserPreferences from "../../../../../context/UserPreferences/UseUserPreferences";
import { DEFAULT_SOURCES } from "../../../../../helpers/constants";
import { CategoriesContainer, CategoryButton } from "../../NewsList/styles";
import { ModalFooter } from "../styles";
import { ReactComponent as CloseIcon } from "../../../../../Assets/close.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { SourcesObjectType } from "../../../../../context/UserPreferences/types";

function PersonalizeSources({ back }: { back: () => void }) {
  const { mySources, updatePreferences } = useUserPreferences();

  //Get preffered Sources from user preferences or use top authors if no preferences set
  const SOURCES = mySources || DEFAULT_SOURCES;

  const [selectedSources, setSelectedSources] =
    useState<SourcesObjectType[]>(SOURCES);
  const [isDisabled, setIsDisabled] = useState(true);

  const removeCategory = (category: SourcesObjectType) => {
    const array = new Array(...selectedSources);
    const index = array.indexOf(category);
    if (index !== -1) {
      array.splice(index, 1);
      setSelectedSources(array);
      setIsDisabled(false);
    }
  };

  const Submit = () => {
    updatePreferences("sources", selectedSources);
    toast.success("Sources updated successfully!");
  };

  return (
    <>
      <h3>What sources do you want news from?</h3>
      <p>
        Select up to 60 news sources for your news feed. The top sources have
        already been added for you.
      </p>
      {/* <SearchForm /> */}

      <h4>Selected Sources</h4>

      <CategoriesContainer className="animated fadeInUp delay2">
        {selectedSources?.length ? (
          selectedSources?.map((category: SourcesObjectType) => (
            <CategoryButton
              key={category?.uri}
              className="item__a"
              onClick={() => removeCategory(category)}
            >
              {category?.title}
              <CloseIcon />
            </CategoryButton>
          ))
        ) : (
          <p>Use all sources (default when no sources are selected)</p>
        )}
        <CategoryButton className="item__a active">+ Add source</CategoryButton>
      </CategoriesContainer>
      <ModalFooter>
        <Button className="delay3" onClick={back}>
          Go back
        </Button>
        <Button
          disabled={isDisabled}
          className="delay4"
          variant="filled"
          onClick={Submit}
        >
          Submit
        </Button>
      </ModalFooter>
    </>
  );
}

export default PersonalizeSources;
