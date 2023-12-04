import {
  ModalBox,
  ModalBoxContainer,
  PersonalizationContainer,
} from "./styles";
import PersonalizeCategories from "./components/PersonalizeCategories";
import PersonalizeAuthors from "./components/PersonalizeAuthors";
import { useState } from "react";
import PersonalizeSources from "./components/PersonalizeSources";
import { ReactComponent as CloseIcon } from "../../../../Assets/close.svg";
import { ReactComponent as CategoriesIcon } from "../../../../Assets/Categories.svg";
import { ReactComponent as AuthorsIcon } from "../../../../Assets/Users.svg";
import { ReactComponent as SourcesIcon } from "../../../../Assets/Sources.svg";
import Button from "../../../../components/Button/Button";
import useUserPreferences from "../../../../context/UserPreferences/UseUserPreferences";
import { toast } from "react-toastify";

function Personalize({
  close,
  scrollToFeed,
}: {
  close: () => void;
  scrollToFeed: () => void;
}) {
  const { updatePreferences } = useUserPreferences();
  const [page, setPage] = useState(0);

  const clearPreferences = () => {
    updatePreferences("clear", null);
    toast.success("Successfully cleared all personalization.");
    close();
    scrollToFeed();
  };
  return (
    <PersonalizationContainer>
      <div className="overlay" onClick={close}></div>
      <div className="main animated fadeInUp">
        <CloseIcon onClick={close} className="close" />
        {page === 0 && (
          <>
            <h3>Hi, what would you like to personalize?</h3>
            <p>Click on a segment below to personalize your news feed.</p>
            <ModalBoxContainer>
              <ModalBox
                className="animated fadeInUp"
                onClick={() => setPage(1)}
              >
                <CategoriesIcon />
                <h5>Categories</h5>
                <p>Customize categories (Business, Arts e.t.c)</p>
              </ModalBox>
              <ModalBox
                className="animated fadeInUp delay2"
                onClick={() => setPage(2)}
              >
                <SourcesIcon />
                <h5>Sources</h5>
                <p>Customize sources (Cnn, FoxNews e.t.c)</p>
              </ModalBox>
              <ModalBox
                className="animated fadeInUp delay3"
                onClick={() => setPage(3)}
              >
                <AuthorsIcon />
                <h5>Authors</h5>
                <p>Select authors (Richard Quest e.t.c)</p>
              </ModalBox>
            </ModalBoxContainer>
            <Button
              variant="text"
              className="underline"
              style={{ margin: "15px auto 0px" }}
              onClick={clearPreferences}
            >
              Clear all personalization
            </Button>
          </>
        )}
        {page === 1 && <PersonalizeCategories back={() => setPage(0)} />}
        {page === 2 && <PersonalizeSources back={() => setPage(0)} />}
        {page === 3 && <PersonalizeAuthors back={() => setPage(0)} />}
      </div>
    </PersonalizationContainer>
  );
}

export default Personalize;
