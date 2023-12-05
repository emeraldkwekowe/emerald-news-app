import Button from "../../../../../components/Button/Button";
import useUserPreferences from "../../../../../context/UserPreferences/UseUserPreferences";
import { TOP_AUTHORS } from "../../../../../helpers/constants";
import { CategoriesContainer, CategoryButton } from "../../NewsList/styles";
import { ModalFooter } from "../styles";
import { ReactComponent as CloseIcon } from "../../../../../Assets/close.svg";
import { toast } from "react-toastify";
import { useState } from "react";
import SearchForm from "./SearchForm";

function PersonalizeAuthors({
  back,
  returnToFeed,
}: {
  back: () => void;
  returnToFeed: () => void;
}) {
  const { myAuthors, updatePreferences } = useUserPreferences();

  //Function to get author's name from uri
  const getAuthorName = (uri: string) => uri.split("@")[0].replaceAll("_", " ");

  //Get preffered authors from user preferences or use top authors if no preferences set
  const AUTHORS = myAuthors || TOP_AUTHORS.default;

  const [selectedAuthors, setSelectedAuthors] = useState(AUTHORS);

  const modifyAuthors = (author: string) => {
    const array = new Array(...selectedAuthors);
    const index = array.indexOf(author);
    //If item is not present in array
    if (index === -1) {
      //add item
      array.push(author);
    } else {
      //remove item
      array.splice(index, 1);
    }
    setSelectedAuthors(array);
  };

  const Submit = () => {
    updatePreferences("authors", selectedAuthors);
    toast.success("Authors updated successfully!");
    returnToFeed();
  };

  return (
    <>
      <h3>What authors are you interested in?</h3>
      <p>
        Select up to 10 authors to see on the landing page. The top 5 authors
        have already been added for you.
      </p>
      <SearchForm
        title="authors"
        currentList={selectedAuthors}
        addToListFn={(author) => modifyAuthors(author)}
      />

      <h4>Selected Authors</h4>
      <CategoriesContainer className="animated fadeInUp">
        {selectedAuthors?.length ? (
          selectedAuthors?.map((author) => (
            <CategoryButton
              key={author}
              className="item__a"
              onClick={() => modifyAuthors(author)}
            >
              {getAuthorName(author)}
              <CloseIcon />
            </CategoryButton>
          ))
        ) : (
          <p>No author selected</p>
        )}
      </CategoriesContainer>
      <ModalFooter>
        <Button className="delay1" onClick={back}>
          Go back
        </Button>
        <Button
          className="delay1"
          variant="filled"
          disabled={selectedAuthors.length < 3}
          onClick={Submit}
        >
          Submit
        </Button>
      </ModalFooter>
    </>
  );
}

export default PersonalizeAuthors;
