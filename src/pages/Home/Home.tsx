import NewsList from "./components/NewsList/NewsList";
import { RightSection } from "./components/FreshOffTheBoat/styles";
import { MainContentContainer } from "./styles";
import LatestInYourCountry from "./components/LatestInYourCountry/LatestInYourCountry";
import Authors from "./components/Authors/Authors";
import Personalize from "./components/Personalize/Personalize";
import { useRef, useState } from "react";
import FreshOffTheBoat from "./components/FreshOffTheBoat/FreshOffTheBoat";
import Header from "../components/Header/Header";

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

  //Open and close modal functions
  const openPersonalizeModal = () => {
    document.body.style.overflow = "hidden";
    setShowPersonalizeInterface(true);
  };

  const closePersonalizeModal = () => {
    document.body.style.overflow = "auto";
    setShowPersonalizeInterface(false);
  };

  return (
    <main>
      <Header personalize={openPersonalizeModal} />
      {/*Data sourced from New York Times API*/}
      <FreshOffTheBoat />
      <MainContentContainer ref={userFeedRef}>
        {/*Data sourced from Newsapi.api - eventregistry*/}
        <NewsList />
        <RightSection>
          {/* Data sourced from newsapi.org */}
          <LatestInYourCountry />
          <Authors />
        </RightSection>
      </MainContentContainer>
      {showPersonalizeInterface && (
        <Personalize
          close={closePersonalizeModal}
          scrollToFeed={scrollToFeed}
        />
      )}
    </main>
  );
}

export default Home;
