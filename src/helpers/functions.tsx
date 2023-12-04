//TODO: test this
export const getPrimaryCategory = (categories: { label?: string }[]) => {
  if (categories?.length) {
    const categoriesArr =
      categories[categories?.length - 1]?.label?.split("/") || "";
    return categoriesArr[categoriesArr?.length - 1];
  } else {
    return null;
  }
};

//Function to remove nullish fields for the newsapi.api endpoint
export const omitNullishFields = (object: { [key: string]: any }) => {
  Object.keys(object).forEach((key) => {
    if (object[key] === null) {
      delete object[key];
    }
  });
  return object;
};

export const reduceTextSize = (text: string, limit: number) => {
  if (text?.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

export const formatDate = (
  date: string | Date = new Date(),
  isForAPI = false
) => {
  if (isForAPI) {
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", {
      month: "2-digit",
    });
    const day = date.toLocaleString("default", { day: "2-digit" });
    return [year, month, day].join("-");
  } else {
    return new Date(date).toDateString();
  }
};
