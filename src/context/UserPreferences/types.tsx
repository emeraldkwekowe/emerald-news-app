export type UserPreferencesProviderType = {
  children: React.ReactNode;
};

export type SourcesObjectType = {
  uri: string;
  title: string;
};

export type UpdatePreferencesFnTypes =
  | "authors"
  | "sources"
  | "categories"
  | "clear";

export type UserPreferencesContextType = {
  myAuthors: string[] | null;
  mySources: SourcesObjectType[] | null;
  myCategories: string[] | null;
  updatePreferences: (type: UpdatePreferencesFnTypes, value: any) => void;
};

export type UserPreferenceType = {
  authours: [];
  sources: [];
  categories: [];
};
