import Button from "../../../../../components/Button/Button";
import useUserPreferences from "../../../../../context/UserPreferences/UseUserPreferences";
import { TOP_AUTHORS } from "../../../../../helpers/constants";
import { CategoriesContainer, CategoryButton } from "../../NewsList/styles";
import { ModalFooter } from "../styles";
import { ReactComponent as CloseIcon } from "../../../../../Assets/close.svg";

function PersonalizeAuthors() {
  const { myAuthors } = useUserPreferences();

  //Function to get author's name from uri
  const getAuthorName = (uri: string) => uri.split("@")[0].replaceAll("_", " ");

  //Get preffered authors from user preferences or use top authors if no preferences set
  const AUTHORS = myAuthors || TOP_AUTHORS;

  return (
    <>
      <h3>What authors are you interested in?</h3>
      <p>Select up to 5 authors to see on the landing page.</p>

      <h4>Selected Authors</h4>
      <CategoriesContainer className="animated fadeInUp delay2">
        {AUTHORS?.map((author) => (
          <CategoryButton key={author} className="item__a">
            {getAuthorName(author)}
            <CloseIcon style={{ height: 20, marginLeft: 10, width: 20 }} />
          </CategoryButton>
        ))}
      </CategoriesContainer>
      <ModalFooter>
        <Button className="delay3">Go back</Button>
        <Button className="delay4" variant="filled">
          Submit
        </Button>
      </ModalFooter>
    </>
  );
}

export default PersonalizeAuthors;
