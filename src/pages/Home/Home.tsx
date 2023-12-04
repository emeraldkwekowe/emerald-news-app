import Header from "../../components/Header/Header";
import BestOfTheWeek from "./components/BestOfTheWeek/BestOfTheWeek";
import NewsList from "./components/NewsList/NewsList";
import { RightSection } from "./components/BestOfTheWeek/styles";
import { MainContentContainer } from "./styles";
import LatestInYourCountry from "./components/LatestInYourCountry/LatestInYourCountry";
import Authors from "./components/Authors/Authors";
import Personalize from "./components/Personalize/Personalize";
import { useState } from "react";

function Home() {
  const [showPersonalizeInterface, setShowPersonalizeInterface] =
    useState(false);
  return (
    <main>
      <Header personalize={() => setShowPersonalizeInterface(true)} />
      {/*Data sourced from NewYorkTimes API*/}
      <BestOfTheWeek />
      <MainContentContainer>
        {/*Data sourced from newsapi.api - eventregistry*/}
        <NewsList personalize={() => setShowPersonalizeInterface(true)} />
        <RightSection>
          {/* Data sourced from newsapi.org */}
          <LatestInYourCountry />
          <Authors />
        </RightSection>
      </MainContentContainer>
      {showPersonalizeInterface && (
        <Personalize close={() => setShowPersonalizeInterface(false)} />
      )}
    </main>
  );
}

export default Home;
