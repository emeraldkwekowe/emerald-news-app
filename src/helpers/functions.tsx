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
export const omitNullishFields = (object: {
  [key: string]: string | number;
}) => {
  Object.keys(object).forEach((key) => {
    if (object[key] === null) {
      delete object[key];
    }
  });
  return object;
};

export const reduceTextSize = (text: string, limit: number) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};
