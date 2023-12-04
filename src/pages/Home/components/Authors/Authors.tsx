import { useEffect, useState } from "react";
import { getAuthorPosts } from "../../../../api/requests";
import { AsideContainer } from "../LatestInYourCountry/styles";
import Error from "../../../../components/Error/Error";
import { NewsListLoader } from "../../../../components/LoadingCard/LoadingCard";
import { endpoints } from "../../../../api/endpoints";
import useUserPreferences from "../../../../context/UserPreferences/UseUserPreferences";
import { TOP_AUTHORS } from "../../../../helpers/constants";
import { NewsCardSmall } from "../../../../components/NewsCard/NewsCard";
import { formatDate } from "../../../../helpers/functions";

interface Story {
  title: string;
  authors: { name: string }[];
  date: string;
  url: string;
}

function Authors() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | boolean>(false);
  const [stories, setStories] = useState<Story[] | null>(null);

  //Get preferences from global context
  const { myAuthors } = useUserPreferences();

  //Get preffered authors from user preferences or use top authors if no preferences set
  const selectedAuthors = myAuthors || TOP_AUTHORS;

  //Reusable stop loading function to ensure DRY
  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const results: Story[] = await getAuthorPosts(
          endpoints?.getNewsArticles,
          selectedAuthors
        );
        setStories(results);
        setError(false);
        stopLoading();
      } catch (error: any) {
        setError(error?.message || "Something went wrong");
        stopLoading();
      }
    };

    getData();
  }, [selectedAuthors]);

  //Update section title based on availability of personalized authors
  const PAGE_TITLE = myAuthors
    ? "From your favorite authors"
    : "From top authors";

  return (
    <AsideContainer>
      <h2 style={{ marginBottom: 20 }}>{PAGE_TITLE}</h2>
      {loading && <NewsListLoader size="small" />}
      {error && <Error />}
      {stories?.length
        ? stories.map((story: Story) => (
            <NewsCardSmall
              key={story?.title}
              {...{
                ...story,
                source: story?.authors[0]?.name,
                date: formatDate(story?.date),
              }}
            />
          ))
        : null}
    </AsideContainer>
  );
}

export default Authors;
