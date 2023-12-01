import { useContext } from "react";
import { UserPreferencesContext } from "./UserPreferencesContext";

export const useUserPreferences = () => useContext(UserPreferencesContext);

export default useUserPreferences;
