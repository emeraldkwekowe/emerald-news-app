import { useQuery } from "react-query";
import axios from "./axiosInstance";
import { omitNullishFields } from "../helpers/functions";

//Fetcher function
export const get = async (url: string) =>
  await axios.get(url).then((response) => response);

//Fetcher function post
export const post = async (url: string, config: any) =>
  await axios.post(url, config).then((response) => response);

//Use Query hook to fetch data
export const useGetData = (title: string, url: string, config: {}) =>
  useQuery(title, () => post(url, omitNullishFields(config)));
