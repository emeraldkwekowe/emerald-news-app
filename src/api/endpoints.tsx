import { formatDate } from "../helpers/functions/functions";
import { getCountry } from "../helpers/getCountry";

//TO-DO: API secrets should ideally be stored and handled on the backend to ensure secrets are protected.
export const endpoints = {
  ///////////New York Times stories API/////////
  nytStories: () =>
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${
      process.env.REACT_APP_NEWS_NYT_STORIES_KEY
    }&begin_date=${formatDate(
      new Date(new Date(new Date().setDate(new Date().getDate() - 1))),
      true
    )}&sort=newest&fq=news_desk:("Sports", "Foreign", "Politics", "Business", "Technology") `,

  //////////////Newsapi.ai API//////////////
  getNewsArticles: "http://eventregistry.org/api/v1/article/getArticles",

  //////////////Newsapi.org API/////////////
  getStoriesByCountry: (country = "de", pageSize = 6) =>
    `https://newsapi.org/v2/top-headlines?country=${
      getCountry() || country
    }&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_NEWS_API_ORG_KEY}`,
};
