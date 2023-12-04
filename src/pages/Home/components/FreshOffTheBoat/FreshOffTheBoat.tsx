import { endpoints } from "../../../../api/endpoints";
import { get } from "../../../../api/requests";
import NewsBanner from "../../../../components/NewsBanner/NewsBanner";
import { LeftSection, RightSection, MainContentContainer } from "./styles";
import useUserPreferences from "../../../../context/UserPreferences/UseUserPreferences";
import { API_KEYS } from "../../../../helpers/constants";
import Error from "../../../../components/Error/Error";
import { formatDate } from "../../../../helpers/functions";
import { useEffect, useState } from "react";

interface Story {
  news_desk: string;
  headline: { main: string };
  web_url: string;
  multimedia: { url: string }[];
  pub_date: string;
  abstract: string;
  lead_paragraph: string;
}

function FreshOffTheBoat() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | boolean>(false);
  const [stories, setStories] = useState<Story[] | []>([]);

  //Get preferences from global context
  const { myCategories } = useUserPreferences();

  //Reusable stop loading function to ensure DRY
  const stopLoading = () => {
    setLoading(false);
  };

  //Get data for the top 3 stories of the day
  useEffect(() => {
    const getData = async () => {
      try {
        const results = await get(
          endpoints?.nytStories +
            `?api-key=${API_KEYS?.nytStories}&begin_date=${formatDate(
              new Date(new Date(new Date().setDate(new Date().getDate() - 1))),
              true
            )}&sort=newest&fq=news_desk:("Sports", "Foreign", "Politics", "Business", "Technology")            `
        );
        const docs = results?.data?.response?.docs;
        setStories(
          docs.filter((item: { multimedia: {}[] }) => item?.multimedia?.length)
        );
        setError(false);
        stopLoading();
      } catch (error: any) {
        setError(error?.message || "Something went wrong");
        stopLoading();
      }
    };
    getData();
  }, []);

  //If the user has set preferences (categories) then let them know they are seeing custom news, else, general news
  const PAGE_TITLE = myCategories
    ? `Top picks for you.`
    : `Fresh off the boat.`;

  if (error) {
    return <Error />;
  }
  return (
    <MainContentContainer>
      <LeftSection>
        <h1 className="animated fadeInUp delay3">{PAGE_TITLE}</h1>
        <NewsBanner
          loading={loading}
          position="1"
          newsDesk={stories[0]?.news_desk}
          title={stories[0]?.headline?.main}
          url={stories[0]?.web_url}
          image={"https://nytimes.com/" + stories[0]?.multimedia[11]?.url}
          body={stories[0]?.abstract + " " + stories[0]?.lead_paragraph}
          //Add date logic here so the NewsBanner component remains a pure component and can be memoized
          date={formatDate(stories[0]?.pub_date)}
        />
      </LeftSection>
      <RightSection>
        <NewsBanner
          loading={loading}
          position="2"
          small
          className="delay2"
          newsDesk={stories[1]?.news_desk}
          title={stories[1]?.headline?.main}
          url={stories[1]?.web_url}
          image={"https://nytimes.com/" + stories[1]?.multimedia[6]?.url}
          date={formatDate(stories[1]?.pub_date)}
        />
        <NewsBanner
          loading={loading}
          position="3"
          small
          className="delay3"
          newsDesk={stories[2]?.news_desk}
          title={stories[2]?.headline?.main}
          url={stories[2]?.web_url}
          image={"https://nytimes.com/" + stories[2]?.multimedia[6]?.url}
          date={formatDate(stories[2]?.pub_date)}
        />
      </RightSection>
    </MainContentContainer>
  );
}

export default FreshOffTheBoat;
