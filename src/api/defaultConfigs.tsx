import { API_KEYS } from "../helpers/constants";
import { formatDate } from "../helpers/functions/functions";

//Default api config for eventregistry api (newsapi.api)
export const eventRegistryConfig = {
  action: "getArticles",
  articlesPage: 1,
  lang: "eng",
  dateStart: formatDate(new Date(), true),
  articlesCount: 10,
  articlesSortBy: "date",
  articlesSortByAsc: false,
  articlesArticleBodyLen: -1,
  resultType: "articles",
  dataType: ["news", "pr", "blog"],
  apiKey: API_KEYS.newsApiApi,
  forceMaxDataTimeWindow: 31,
  includeArticleConcepts: true,
  includeArticleCategories: true,
  //TODO: we still have a repetion problem despite this, try a fix.
  isDuplicateFilter: "skipDuplicates",
};

//Ignore sources with poor media
export const ignoreSourceUri = [
  "twarak.com",
  "crweworld.com",
  "streetinsider.com",
  "keyt.com",
  "uk.advfn.com",
  "freerepublic.com",
  "herald.co.zw",
  "thisdaylive.com",
  "dailypolitical.com",
  "thelincolnianonline.com",
  "defenseworld.net",
  "themarketsdaily.com",
  "freerepublic.com",
  "idea.int",
  "orchidboard.com",
  "wacotrib.com",
];
