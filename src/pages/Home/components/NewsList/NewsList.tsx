import { LeftSection } from "../FreshOffTheBoat/styles";
import NewsCard from "../../../../components/NewsCard/NewsCard";
import { CategoriesContainer, CategoryButton } from "./styles";
import { useEffect, useState } from "react";
import { DEFAULT_CATEGORIES } from "../../../../helpers/constants";
import { NewsListLoader } from "../../../../components/LoadingCard/LoadingCard";
import useUserPreferences from "../../../../context/UserPreferences/UseUserPreferences";
import { usePostData } from "../../../../api/requests";
import { endpoints } from "../../../../api/endpoints";
import {
  eventRegistryConfig,
  ignoreSourceUri,
} from "../../../../api/defaultConfigs";
import Error from "../../../../components/Error/Error";
import Button from "../../../../components/Button/Button";
import { formatDate } from "../../../../helpers/functions";
import { Story } from "../../../Search/types";

function NewsList({ personalize }: { personalize: () => void }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [dateStart, setDateStart] = useState(new Date());
  const [fetchedStoriesFromYesterday, setFetchedStoriesFromYesterday] =
    useState(false);

  //Pagination
  const [page, setPage] = useState(1);

  //Get preferences from global context
  const { mySources, myCategories } = useUserPreferences();

  //Get news data from event registry api (newsapi.ai) using the react-query api
  const { status, data, error } = usePostData(
    "allStories__Eventregistry",
    endpoints?.getNewsArticles,
    {
      ...eventRegistryConfig,
      articlesCount: 10,
      //Using the keyword filter against the categoryUri filter as this ensures more robust results (this is common practice accross popular news platform)
      keyword: activeCategory === "all" ? myCategories || null : activeCategory,
      keywordOper: "or",
      //User's preffered sources or get all allowed sources
      sourceUri: mySources ? Array.from(mySources, (item) => item.uri) : null,
      ignoreSourceUri: ignoreSourceUri,
      dateStart: formatDate(dateStart, true),
      articlesPage: page,
    }
  );

  //Define the categories array from the user's preferences or default categories (if no preferences are set)
  const categories = myCategories || DEFAULT_CATEGORIES.default;

  //Extract articles from response
  const articlesResponse = data?.data?.articles;
  const stories = articlesResponse?.results || [];
  const totalPages = articlesResponse?.totalResults || 0;

  useEffect(() => {
    //Get stories from yesterday if attempting to get for today returns no data
    if (
      data?.data?.articles?.results?.length === 0 &&
      !fetchedStoriesFromYesterday
    ) {
      setDateStart(new Date(new Date().setDate(new Date().getDate() - 1)));
      setFetchedStoriesFromYesterday(true);
    }
  }, [data, fetchedStoriesFromYesterday]);

  const PAGE_TITLE = myCategories
    ? `Your personalized news feed`
    : `Latest stories for you.`;

  return (
    <LeftSection>
      <h2 style={{ fontSize: "30px", marginTop: 0 }}>
        {PAGE_TITLE}
        <Button variant="filled" onClick={personalize}>
          Personalize Feed
        </Button>
      </h2>
      <CategoriesContainer>
        <CategoryButton
          onClick={() => setActiveCategory("all")}
          className={`${activeCategory === "all" ? "active" : ""}`}
        >
          All
        </CategoryButton>
        {categories?.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${activeCategory === category ? "active" : ""}`}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoriesContainer>
      {status === "loading" && <NewsListLoader />}
      {error && !data && <Error />}
      {stories?.map((story: Story) => (
        <NewsCard
          key={story?.uri}
          activeCategory={activeCategory}
          {...{ ...story, date: new Date(stories[0]?.date).toDateString() }}
        />
      ))}

      {stories?.length ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Previous page
          </Button>
          <Button
            disabled={page === totalPages}
            variant="filled"
            onClick={() => setPage(page + 1)}
          >
            Next page
          </Button>
        </div>
      ) : null}
    </LeftSection>
  );
}

export default NewsList;
