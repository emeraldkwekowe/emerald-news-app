export interface Story {
  source: { uri: string };
  uri: string;
  date: string;
  title: string;
  url: string;
  image: string;
  categories: { label: string }[];
  body: string;
  loading: boolean;
}
export type CategoryFilter = {
  dateStart: string | null;
  dateEnd: string | null;
  categories: string[];
  sources: string[];
};
export type StateNames = "dateStart" | "dateEnd" | "categories" | "sources";
