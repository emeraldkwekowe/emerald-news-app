import { useQuery } from "react-query";
import axios from "./axiosInstance";
import { formatDate, omitNullishFields } from "../helpers/functions/functions";
import { eventRegistryConfig } from "./defaultConfigs";

//Fetcher function
export const get = async (url: string) =>
  await axios.get(url).then((response) => response);

//Fetcher function post
export const post = async (url: string, config: any) =>
  await axios.post(url, config).then((response) => response);

//Use Query hook to fetch data (for requests that fetch with post, e.g: newsapi.api)
export const usePostData = (title: string, url: string, config: {}) =>
  useQuery([title, config], () => post(url, omitNullishFields(config)));

//Use Query hook to fetch data
export const useGetData = (title: string, url: string, filters?: {}) =>
  useQuery([title, filters], () => get(url));

//Function to get author posts.
//CONTEXT: Newsapi.ai (eventregistry.com) is currently the only provided API that supports filtering by author.
//This endpoint is poorly configured and only works when a single author is provided per request.
//Considering this platform allows users add up to 5 favorite authors, we need to make 5 api request.
//This would not be encouraged in a real-life scenario, but for the sake of this test, I would use the promise.all API to attempt to resolve all the requests at once for performance.
//TODO: Notify backend to ensure the API works when multiple authors are provided via 'authorUri'
export const getAuthorPosts = async (url: string, authors: string[]) =>
  await Promise.all(
    authors.map(async (author) => {
      const result = await post(url + "?author=" + author, {
        ...eventRegistryConfig,
        //Get author's articles within the last 2 months
        dateStart: formatDate(
          new Date(new Date().setDate(new Date().getDate() - 60)),
          true
        ),
        authorUri: [author],
        articlesCount: 1,
      });
      if (result != null && "data" in result) {
        return result?.data?.articles?.results[0];
      }
    })
  );
