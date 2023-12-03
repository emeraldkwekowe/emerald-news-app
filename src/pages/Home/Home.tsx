import Header from "../../components/Header/Header";
import NewsList from "./components/NewsList/NewsList";
import TopStories from "./components/TopStories/TopStories";
import { RightSection } from "./components/TopStories/styles";
import { MainContentContainer } from "./styles";

function Home() {
  return (
    <main>
      <Header />
      <TopStories />
      <MainContentContainer>
        <NewsList />
        <RightSection></RightSection>
      </MainContentContainer>
    </main>
  );
}

export default Home;
