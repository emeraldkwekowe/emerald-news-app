import Button from "../../../../../components/Button/Button";
import useUserPreferences from "../../../../../context/UserPreferences/UseUserPreferences";
import { TOP_AUTHORS } from "../../../../../helpers/constants";
import { CategoriesContainer, CategoryButton } from "../../NewsList/styles";
import { ModalFooter } from "../styles";
import { ReactComponent as CloseIcon } from "../../../../../Assets/close.svg";
import { toast } from "react-toastify";
import { useState } from "react";

function PersonalizeAuthors() {
  const { myAuthors, updatePreferences } = useUserPreferences();

  //Function to get author's name from uri
  const getAuthorName = (uri: string) => uri.split("@")[0].replaceAll("_", " ");

  //Get preffered authors from user preferences or use top authors if no preferences set
  const AUTHORS = myAuthors || TOP_AUTHORS;

  const [selectedAuthors, setSelectedAuthors] = useState(AUTHORS);

  const removeCategory = (category: string) => {
    const array = new Array(...selectedAuthors);
    const index = array.indexOf(category);
    if (index !== -1) {
      array.splice(index, 1);
      setSelectedAuthors(array);
    }
  };

  const Submit = () => {
    updatePreferences("authors", selectedAuthors);
    toast.success("Authors updated successfully!");
  };

  return (
    <>
      <h3>What authors are you interested in?</h3>
      <p>
        Select up to 10 authors to see on the landing page. The top 5 authors
        have already been added for you.
      </p>

      <h4>Selected Authors</h4>
      <CategoriesContainer className="animated fadeInUp delay2">
        {selectedAuthors?.length ? (
          selectedAuthors?.map((author) => (
            <CategoryButton
              key={author}
              className="item__a"
              onClick={() => removeCategory(author)}
            >
              {getAuthorName(author)}
              <CloseIcon style={{ height: 20, marginLeft: 10, width: 20 }} />
            </CategoryButton>
          ))
        ) : (
          <p>No author selected</p>
        )}
      </CategoriesContainer>
      <ModalFooter>
        <Button className="delay3">Go back</Button>
        <Button
          className="delay4"
          variant="filled"
          disabled={selectedAuthors.length < 5}
          onClick={Submit}
        >
          Submit
        </Button>
      </ModalFooter>
    </>
  );
}

export default PersonalizeAuthors;
