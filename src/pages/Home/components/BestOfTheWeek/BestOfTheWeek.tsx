import { endpoints } from "../../../../api/endpoints";
import { useGetData } from "../../../../api/requests";
import NewsBanner from "../../../../components/NewsBanner/NewsBanner";
import { LeftSection, RightSection, BestOfTheWeekContainer } from "./styles";
import useUserPreferences from "../../../../context/UserPreferences/UseUserPreferences";
import { API_KEYS, DEFAULT_CATEGORIES } from "../../../../helpers/constants";
import Error from "../../../../components/Error/Error";
import { formatDate } from "../../../../helpers/functions";

function BestOfTheWeek() {
  //Get preferences from global context
  const { myCategories } = useUserPreferences();

  //Get preffered categories from user preferences or use default categories if no preferences set
  const selectedCategories = (myCategories || DEFAULT_CATEGORIES).map(
    (category) => `"${category}"`
  );

  //Get data for the top 3 stories of the day
  const { status, data, error } = useGetData(
    "BestOfTheWeek",
    endpoints?.nytStories +
      `?api-key=${API_KEYS?.nytStories}&begin_date=${formatDate(
        new Date(),
        true
      )}&sort=newest&fq=news_desk:(${selectedCategories.join(",")})`
  );

  //Extract articles from response
  const stories = data?.data?.response?.docs || [];

  //If the user has set preferences (categories) then let them know they are seeing custom news, else, general news
  const PAGE_TITLE = myCategories
    ? `Top picks for you.`
    : `Fresh off the boat.`;

  if (error && !data) {
    return <Error />;
  }
  return (
    <BestOfTheWeekContainer>
      <LeftSection>
        <h1 className="animated fadeInUp delay3">{PAGE_TITLE}</h1>
        <NewsBanner
          position="1"
          newsDesk={stories[0]?.news_desk}
          title={stories[0]?.headline?.main}
          url={stories[0]?.web_url}
          image={"https://nytimes.com/" + stories[0]?.multimedia[11]?.url}
          body={stories[0]?.abstract}
          //Add date logic here so the NewsBanner component remains a pure component and can be memoized
          date={formatDate(stories[0]?.pub_date)}
          status={status}
        />
      </LeftSection>
      <RightSection>
        <NewsBanner
          position="2"
          small
          className="delay2"
          newsDesk={stories[1]?.news_desk}
          title={stories[1]?.headline?.main}
          url={stories[1]?.web_url}
          image={"https://nytimes.com/" + stories[1]?.multimedia[6]?.url}
          date={formatDate(stories[1]?.pub_date)}
          status={status}
        />
        <NewsBanner
          position="3"
          small
          className="delay3"
          newsDesk={stories[2]?.news_desk}
          title={stories[2]?.headline?.main}
          url={stories[2]?.web_url}
          image={"https://nytimes.com/" + stories[2]?.multimedia[6]?.url}
          date={formatDate(stories[2]?.pub_date)}
          status={status}
        />
      </RightSection>
    </BestOfTheWeekContainer>
  );
}

export default BestOfTheWeek;
