import Header from "../../components/Header/Header";
import BestOfTheWeek from "./components/BestOfTheWeek/BestOfTheWeek";
import NewsList from "./components/NewsList/NewsList";
import { RightSection } from "./components/BestOfTheWeek/styles";
import { MainContentContainer } from "./styles";
import LatestInYourCountry from "./components/LatestInYourCountry/LatestInYourCountry";

function Home() {
  return (
    <main>
      <Header />
      {/*Data sourced from nyt TODO: not yet*/}
      <BestOfTheWeek />
      <MainContentContainer>
        {/*Data sourced from newsapi.api*/}
        <NewsList />
        <RightSection>
          {/* Data sourced from newsapi.org */}
          <LatestInYourCountry />
        </RightSection>
      </MainContentContainer>
    </main>
  );
}

export default Home;
