export type UserPreferencesProviderType = {
  children: React.ReactNode;
};

export type UserPreferencesContextType = {
  myAuthors: string[] | null;
  mySources: string[] | null;
  myCategories: string[] | null;
  updatePreferences: (
    type: "authors" | "sources" | "categories",
    value: string[]
  ) => void;
};

export type UserPreferenceType = {
  authours: [];
  sources: [];
  categories: [];
};
