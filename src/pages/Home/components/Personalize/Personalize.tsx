import { PersonalizationContainer } from "./styles";
import PersonalizeCategories from "./components/PersonalizeCategories";
import PersonalizeAuthors from "./components/PersonalizeAuthors";
import { useState } from "react";

function Personalize() {
  const [page, setPage] = useState(2);
  return (
    <PersonalizationContainer>
      <div className="overlay"></div>
      <div className="main animated fadeInUp">
        {page === 1 && <PersonalizeCategories />}
        {page === 2 && <PersonalizeAuthors />}
      </div>
    </PersonalizationContainer>
  );
}

export default Personalize;
