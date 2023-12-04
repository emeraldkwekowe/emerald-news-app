import Header from "../../components/Header/Header";
import NewsList from "./components/NewsList/NewsList";
import { RightSection } from "./components/FreshOffTheBoat/styles";
import { MainContentContainer } from "./styles";
import LatestInYourCountry from "./components/LatestInYourCountry/LatestInYourCountry";
import Authors from "./components/Authors/Authors";
import Personalize from "./components/Personalize/Personalize";
import { useRef, useState } from "react";
import FreshOffTheBoat from "./components/FreshOffTheBoat/FreshOffTheBoat";

function Home() {
  const [showPersonalizeInterface, setShowPersonalizeInterface] =
    useState(false);

  const userFeedRef = useRef<HTMLDivElement>(null);

  const scrollToFeed = () => {
    userFeedRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <main>
      <Header personalize={() => setShowPersonalizeInterface(true)} />
      {/*Data sourced from New York Times API*/}
      <FreshOffTheBoat />
      <MainContentContainer ref={userFeedRef}>
        {/*Data sourced from Newsapi.api - eventregistry*/}
        <NewsList personalize={() => setShowPersonalizeInterface(true)} />
        <RightSection>
          {/* Data sourced from newsapi.org */}
          <LatestInYourCountry />
          <Authors />
        </RightSection>
      </MainContentContainer>
      {showPersonalizeInterface && (
        <Personalize
          close={() => setShowPersonalizeInterface(false)}
          scrollToFeed={scrollToFeed}
        />
      )}
    </main>
  );
}

export default Home;
