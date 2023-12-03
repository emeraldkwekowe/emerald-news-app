import { PersonalizationContainer } from "./styles";
import PersonalizeCategories from "./components/PersonalizeCategories";

function Personalize() {
  return (
    <PersonalizationContainer>
      <div className="overlay"></div>
      <div className="main animated fadeInUp">
        <PersonalizeCategories />
      </div>
    </PersonalizationContainer>
  );
}

export default Personalize;
