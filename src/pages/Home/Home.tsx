import Header from "../../components/Header/Header";
import useUserPreferences from "../../context/UserPreferences/UseUserPreferences";
import TopStories from "./components/TopStories/TopStories";

function Home() {
  const { myAuthors, updatePreferences } = useUserPreferences();
  console.log(myAuthors);
  return (
    <main>
      <Header />
      <TopStories />
      <button onClick={() => updatePreferences("authors", ["emerald", "titi"])}>
        go!!!
      </button>
    </main>
  );
}

export default Home;
