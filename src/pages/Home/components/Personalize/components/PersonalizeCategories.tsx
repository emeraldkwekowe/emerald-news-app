import Button from "../../../../../components/Button/Button";
import useUserPreferences from "../../../../../context/UserPreferences/UseUserPreferences";
import { DEFAULT_CATEGORIES } from "../../../../../helpers/constants";
import { CategoriesContainer, CategoryButton } from "../../NewsList/styles";
import { ModalFooter } from "../styles";
import { ReactComponent as CloseIcon } from "../../../../../Assets/close.svg";
import SearchForm from "./SearchForm";
import { useState } from "react";
import { toast } from "react-toastify";

function PersonalizeCategories({
  back,
  returnToFeed,
}: {
  back: () => void;
  returnToFeed: () => void;
}) {
  const { myCategories, updatePreferences } = useUserPreferences();

  //Get preffered categories from user preferences or use top authors if no preferences set
  const CATEGORIES = myCategories || DEFAULT_CATEGORIES.default;

  const [selectedCategories, setSelectedCategories] = useState(CATEGORIES);

  const modifyCategories = (category: string) => {
    const array = new Array(...selectedCategories);
    const index = array.indexOf(category);
    //If item is not present in array
    if (index === -1) {
      //add item
      array.push(category);
    } else {
      //remove item
      array.splice(index, 1);
    }
    setSelectedCategories(array);
  };

  const Submit = () => {
    updatePreferences("categories", selectedCategories);
    toast.success("Categories updated successfully!");
    returnToFeed();
  };

  return (
    <>
      <h3>What categories are you interested in?</h3>
      <p>
        Select up to 15 categories for your news feed. The top categories have
        already been added for you.
      </p>
      <SearchForm
        title="categories"
        currentList={selectedCategories}
        addToListFn={(category) => modifyCategories(category)}
      />

      <h4>Selected Categories</h4>

      <CategoriesContainer className="animated fadeInUp">
        {selectedCategories?.length ? (
          selectedCategories?.map((category) => (
            <CategoryButton
              key={category}
              className="item__a"
              onClick={() => modifyCategories(category)}
            >
              {category}
              <CloseIcon />
            </CategoryButton>
          ))
        ) : (
          <p>No category selected</p>
        )}
      </CategoriesContainer>
      <ModalFooter>
        <Button className="delay1" onClick={back}>
          Go back
        </Button>
        <Button
          disabled={selectedCategories.length < 1}
          className="delay1"
          variant="filled"
          onClick={Submit}
        >
          Submit
        </Button>
      </ModalFooter>
    </>
  );
}

export default PersonalizeCategories;
