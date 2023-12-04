import { createContext, useState } from "react";
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

  //Reusable function that receives the preference type and value and updates it globally
  const updatePreferences = (type: UpdatePreferencesFnTypes, value: any) => {
    switch (type) {
      case "authors":
        setMyAuthors(value);
        break;
      case "categories":
        setMyCategories(value);
        break;
      case "sources":
        setMySources(value);
        break;
      case "clear":
        setMyAuthors(null);
        setMySources(null);
        setMyCategories(null);
        break;
      default:
        break;
    }
  };

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
