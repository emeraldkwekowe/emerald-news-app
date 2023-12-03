import Header from "../../components/Header/Header";
import BestOfTheWeek from "./components/BestOfTheWeek/BestOfTheWeek";
import NewsList from "./components/NewsList/NewsList";
import { RightSection } from "./components/BestOfTheWeek/styles";
import { MainContentContainer } from "./styles";
import LatestInYourCountry from "./components/LatestInYourCountry/LatestInYourCountry";
import Authors from "./components/Authors/Authors";

function Home() {
  return (
    <main>
      <Header />
      {/*Data sourced from NewYorkTimes API*/}
      <BestOfTheWeek />
      <MainContentContainer>
        {/*Data sourced from newsapi.api - eventregistry*/}
        <NewsList />
        <RightSection>
          {/* Data sourced from newsapi.org */}
          <LatestInYourCountry />
          <Authors />
        </RightSection>
      </MainContentContainer>
    </main>
  );
}

export default Home;
