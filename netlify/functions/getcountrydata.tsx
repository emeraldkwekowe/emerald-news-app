export default async (request, context) => {
  try {
    const country = request.url.split("?country=")[1];
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=6&apiKey=${process.env.REACT_APP_NEWS_API_ORG_KEY}`
    );
    const data = await response.json();
    return Response.json({
      ...data,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Failed fetching data" }, { status: 500 });
  }
};
