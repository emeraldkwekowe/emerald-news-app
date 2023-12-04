import Header from "../../components/Header/Header";
import BestOfTheWeek from "./components/BestOfTheWeek/BestOfTheWeek";
import NewsList from "./components/NewsList/NewsList";
import { RightSection } from "./components/BestOfTheWeek/styles";
import { MainContentContainer } from "./styles";
import LatestInYourCountry from "./components/LatestInYourCountry/LatestInYourCountry";
import Authors from "./components/Authors/Authors";
import Personalize from "./components/Personalize/Personalize";
import { useRef, useState } from "react";

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
      <BestOfTheWeek />
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
