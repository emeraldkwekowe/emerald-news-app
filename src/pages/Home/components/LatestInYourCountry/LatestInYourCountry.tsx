import { endpoints } from "../../../../api/endpoints";
import { useGetData } from "../../../../api/requests";
import Error from "../../../../components/Error/Error";
import { NewsListLoader } from "../../../../components/LoadingCard/LoadingCard";
import { NewsCardSmall } from "../../../../components/NewsCard/NewsCard";
import { API_KEYS } from "../../../../helpers/constants";
import { formatDate } from "../../../../helpers/functions";
import { getCountry } from "../../../../helpers/getCountry";
import { AsideContainer } from "./styles";

function LatestInYourCountry() {
  //Get data for the top 3 stories of the day
  const { status, data, error } = useGetData(
    "StoriesByCountry",
    endpoints?.getStoriesByCountry +
      `?country=${getCountry() || "de"}&pageSize=6&apiKey=${
        API_KEYS.newsApiOrg
      }`
  );

  const stories = data?.data?.articles || [];

  const COUNTRY_NAME = getCountry("name");

  return (
    <AsideContainer>
      <h2>Latest in {COUNTRY_NAME}</h2>
      {error && !data && <Error />}
      {status === "loading" && <NewsListLoader size="small" />}
      {stories?.length ? (
        stories.map(
          (story: {
            title: string;
            author: string;
            publishedAt: string;
            url: string;
          }) => (
            <NewsCardSmall
              key={story?.title}
              {...{
                ...story,
                source: story?.author,
                date: formatDate(story?.publishedAt),
              }}
            />
          )
        )
      ) : (
        <p>No articles in {COUNTRY_NAME} at this time</p>
      )}
    </AsideContainer>
  );
}

export default LatestInYourCountry;
