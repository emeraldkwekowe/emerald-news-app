import { ElementContainer, FormDiv, SearchContainer } from "./styles";
import Header from "../../components/Header/Header";
import { MainContentContainer } from "../Home/styles";
import {
  LeftSection as NewsPane,
  RightSection as FilterPane,
} from "../Home/components/FreshOffTheBoat/styles";
import { useEffect, useState } from "react";
import { DEFAULT_CATEGORIES, DEFAULT_SOURCES } from "../../helpers/constants";
import { post } from "../../api/requests";
import { endpoints } from "../../api/endpoints";
import { eventRegistryConfig, ignoreSourceUri } from "../../api/defaultConfigs";
import { CategoryFilter, Story, StateNames } from "./types";
import { NewsListLoader } from "../../components/LoadingCard/LoadingCard";
import Error from "../../components/Error/Error";
import NewsCard from "../../components/NewsCard/NewsCard";
import { omitNullishFields } from "../../helpers/functions";
import Button from "../../components/Button/Button";

function Search() {
  const [filters, setFilters] = useState<CategoryFilter>({
    dateStart: null,
    dateEnd: null,
    categories: [],
    sources: [],
  });

  //API states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | boolean>(false);
  const [stories, setStories] = useState<Story[] | null>(null);

  //Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //Function to ... TODO: DESCRIBE THIS
  const ArrayModifyFn = (
    stateArray: string[],
    stateName: StateNames,
    value: string
  ) => {
    if (value === "all") {
      setFilters({ ...filters, categories: [] });
    }
    {
      const newArr = new Array(...stateArray);
      const valueIndex = newArr.indexOf(value);
      if (valueIndex === -1) {
        newArr.push(value);
      } else {
        newArr.splice(valueIndex, 1);
      }
      setFilters({
        ...filters,
        [stateName]: newArr,
      });
    }
  };

  const UpdateFilter = (filter: StateNames, value: string) => {
    switch (filter) {
      case "dateStart":
        setFilters({ ...filters, dateStart: value });
        break;
      case "dateEnd":
        setFilters({ ...filters, dateEnd: value });
        break;
      case "categories":
        ArrayModifyFn(filters?.categories, "categories", value);
        break;
      case "sources":
        ArrayModifyFn(filters?.sources, "sources", value);
        break;
      default:
        break;
    }
  };

  const clearFilter = (filter: StateNames) => {
    setFilters({ ...filters, [filter]: [] });
  };

  //Reusable stop loading function to ensure DRY
  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { dateStart, dateEnd, categories, sources } = filters;
      try {
        const results = await post(
          endpoints?.getNewsArticles,
          omitNullishFields({
            ...eventRegistryConfig,
            dateStart,
            dateEnd,
            //Using the keyword filter against the categoryUri filter as this ensures more robust results (this is common practice accross popular news platform)
            keyword: categories?.length ? categories : null,
            sourceUri: sources?.length ? sources : null,
            articlesPage: page,
            ignoreSourceUri,
          })
        );
        setTotalPages(results?.data?.articles?.pages);
        setStories(results?.data?.articles?.results || []);
        setError(false);
        stopLoading();
      } catch (error: any) {
        setError(error?.message || "Something went wrong");
        stopLoading();
      }
    };

    getData();
  }, [filters, page]);

  return (
    <SearchContainer>
      <Header
        isFilled
        isSearch
        searchFn={(value: string) => {
          clearFilter("categories");
          UpdateFilter("categories", value);
        }}
      />
      <MainContentContainer>
        <FilterPane>
          <ElementContainer>
            {/*Filter by date*/}
            <h3>Filter by date</h3>
            <div className="flex">
              <FormDiv style={{ marginRight: 10 }}>
                <label>Start Date</label>
                <input
                  onChange={(e) => UpdateFilter("dateStart", e.target.value)}
                  type="date"
                />
              </FormDiv>
              <FormDiv>
                <label>End Date</label>
                <input
                  min={filters?.dateStart || undefined}
                  onChange={(e) => UpdateFilter("dateEnd", e.target.value)}
                  type="date"
                />
              </FormDiv>
            </div>

            {/*Filter by category*/}
            <h3>Filter by category</h3>
            <FormDiv style={{ margin: "0px 0px 20px" }}>
              <label>
                <input
                  type="checkbox"
                  value="all"
                  checked={!filters?.categories?.length}
                  onChange={() => UpdateFilter("categories", "all")}
                />
                All categories
              </label>
              {DEFAULT_CATEGORIES?.default?.length ? (
                DEFAULT_CATEGORIES?.default?.map((category) => (
                  <label key={category}>
                    <input
                      onChange={() => UpdateFilter("categories", category)}
                      type="checkbox"
                      checked={filters?.categories?.includes(category)}
                    />
                    {category}
                  </label>
                ))
              ) : (
                <p>No category found</p>
              )}
            </FormDiv>

            {/*Filter by source*/}
            <h3>Filter by source</h3>
            <FormDiv style={{ marginTop: 10 }}>
              <label>
                <input
                  type="checkbox"
                  value="all"
                  checked={!filters?.sources?.length}
                  onChange={() => UpdateFilter("sources", "all")}
                />
                All sources
              </label>

              {DEFAULT_SOURCES?.default?.length ? (
                DEFAULT_SOURCES?.default?.map((source) => (
                  <label key={source?.title}>
                    <input
                      onChange={() => UpdateFilter("sources", source?.uri)}
                      type="checkbox"
                      checked={filters?.sources?.includes(source?.uri)}
                    />
                    {source?.title}
                  </label>
                ))
              ) : (
                <p>No sources found</p>
              )}
            </FormDiv>
          </ElementContainer>
        </FilterPane>
        <NewsPane>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Search results</h2>
          {error && !stories && <Error />}{" "}
          {loading ? (
            <NewsListLoader />
          ) : stories?.length ? (
            stories?.map((story: Story) => (
              <NewsCard
                key={story?.uri}
                {...{
                  ...story,
                  date: new Date(stories[0]?.date).toDateString(),
                }}
              />
            ))
          ) : (
            <p>No stories found</p>
          )}
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
        </NewsPane>
      </MainContentContainer>
    </SearchContainer>
  );
}

export default Search;
