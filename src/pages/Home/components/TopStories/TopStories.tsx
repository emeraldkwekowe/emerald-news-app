import { eventRegistryConfig } from "../../../../api/defaultConfigs";
import { endpoints } from "../../../../api/endpoints";
import { useGetData } from "../../../../api/requests";
import NewsBanner from "../../../../components/NewsBanner/NewsBanner";
import { LeftSection, RightSection, TopStoriesContainer } from "./styles";
import useUserPreferences from "../../../../context/UserPreferences/UseUserPreferences";
import { DEFAULT_CATEGORIES } from "../../../../helpers/constants";

function TopStories() {
  //Get preferences from global context
  const { mySources, myCategories } = useUserPreferences();

  //Get data for the top 3 stories of the day
  const { status, data } = useGetData("topStories", endpoints?.getTopStories, {
    ...eventRegistryConfig,
    articlesCount: 3,
    //Use user's preffered categories (keyword ensures a more robust result) or default categories
    keyword: myCategories || DEFAULT_CATEGORIES,
    keywordOper: "or",
    //User's preffered sources or get all allowed sources
    sourceUri: mySources || null,
  });

  //Extract articles from response
  const stories = data?.data?.articles?.results || [];
  return (
    <TopStoriesContainer>
      <LeftSection>
        <h1 className="animated fadeInUp delay3">
          {
            //If the user has set preferences (either sources or categories) then let them know they are seeing custom news, else they are seeing general entertainment news
            mySources || myCategories
              ? `Top picks for you.`
              : `Best of this week.`
          }
        </h1>
        {status === "error" && <p>Failed to get news</p>}
        <NewsBanner
          position="1"
          categories={stories[0]?.categories}
          title={stories[0]?.title}
          url={stories[0]?.url}
          image={stories[0]?.image}
          body={stories[0]?.body}
          //Add date logic here so the NewsBanner component remains a pure component and can be memoized
          date={new Date(stories[0]?.date).toDateString()}
          status={status}
        />
      </LeftSection>
      <RightSection>
        <NewsBanner
          position="2"
          small
          className="delay2"
          categories={stories[1]?.categories}
          title={stories[1]?.title}
          url={stories[1]?.url}
          image={stories[1]?.image}
          body={stories[1]?.body}
          date={new Date(stories[1]?.date).toDateString()}
          status={status}
        />
        <NewsBanner
          position="3"
          small
          className="delay3"
          categories={stories[2]?.categories}
          title={stories[2]?.title}
          url={stories[2]?.url}
          image={stories[2]?.image}
          body={stories[2]?.body}
          date={new Date(stories[2]?.date).toDateString()}
          status={status}
        />
      </RightSection>
    </TopStoriesContainer>
  );
}

export default TopStories;
