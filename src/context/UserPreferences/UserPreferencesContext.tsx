import { createContext, useEffect, useState } from "react";
import {
  SourcesObjectType,
  UpdatePreferencesFnTypes,
  UserPreferencesContextType,
  UserPreferencesProviderType,
} from "./types";

export const UserPreferencesContext = createContext<UserPreferencesContextType>(
  {
    myAuthors: null,
    mySources: null,
    myCategories: null,
    updatePreferences: () => {},
  }
);

const UserPreferencesProvider = ({ children }: UserPreferencesProviderType) => {
  const [myAuthors, setMyAuthors] = useState<string[] | null>(null);
  const [mySources, setMySources] = useState<SourcesObjectType[] | null>(null);
  const [myCategories, setMyCategories] = useState<string[] | null>(null);

  //Reusable update storage function
  const updateStorage = (type: UpdatePreferencesFnTypes, value: any) => {
    localStorage.setItem(
      `e_news_hub_preferences:${type}`,
      JSON.stringify(value)
    );
  };

  //Clear storage fn
  const clearStorage = () => {
    localStorage.removeItem("e_news_hub_preferences:authors");
    localStorage.removeItem("e_news_hub_preferences:categories");
    localStorage.removeItem("e_news_hub_preferences:sources");
  };

  //Reusable function that receives the preference type and value and updates it globally
  const updatePreferences = (type: UpdatePreferencesFnTypes, value: any) => {
    switch (type) {
      case "authors":
        setMyAuthors(value);
        updateStorage("authors", value);
        break;
      case "categories":
        setMyCategories(value);
        updateStorage("categories", value);
        break;
      case "sources":
        setMySources(value);
        updateStorage("sources", value);
        break;
      case "clear":
        setMyAuthors(null);
        setMySources(null);
        setMyCategories(null);
        clearStorage();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    //check for existing preferences in localstorage
    if (localStorage.getItem("e_news_hub_preferences:authors")) {
      setMyAuthors(
        JSON.parse(localStorage.getItem("e_news_hub_preferences:authors") || "")
      );
    }
    if (localStorage.getItem("e_news_hub_preferences:categories")) {
      setMyCategories(
        JSON.parse(
          localStorage.getItem("e_news_hub_preferences:categories") || ""
        )
      );
    }
    if (localStorage.getItem("e_news_hub_preferences:sources")) {
      setMySources(
        JSON.parse(localStorage.getItem("e_news_hub_preferences:sources") || "")
      );
    }
  }, []);

  return (
    <UserPreferencesContext.Provider
      value={{
        myAuthors,
        mySources,
        myCategories,
        updatePreferences,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export default UserPreferencesProvider;
