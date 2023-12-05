import { render, screen } from "@testing-library/react";
import NewsBanner from "./NewsBanner";
import { formatDate } from "../../helpers/functions/functions";

describe("NewsBanner Component test", () => {
  const mockData = {
    uri: "7866174171",
    lang: "eng",
    isDuplicate: false,
    date: "2023-12-02",
    time: "12:42:56",
    dateTime: "2023-12-02T12:42:56Z",
    dateTimePub: "2023-12-02T12:00:00Z",
    dataType: "news",
    sim: 0.8196078538894653,
    url: "https://sea.mashable.com/space/29548/watch-how-these-6-planets-orbit-their-star-in-perfect-sync",
    title: "Watch how these 6 planets orbit their star in perfect sync",
    body: "Astronomers have observed a solar system where six planets are in perfect sync with each other as they dance through space around their star, a rare find in the galaxy. About 100 light-years away in the northern constellation of Coma Berenices, these exoplanets, studied with NASA and other telescopes, are in a gravitational lockstep likened to a waltz.",
    source: {
      uri: "sea.mashable.com",
      dataType: "news",
      title: "Mashable SEA",
    },
    categories: [
      {
        uri: "dmoz/Science/Astronomy/Solar_System",
        label: "dmoz/Science/Astronomy/Solar System",
        wgt: 100,
      },
      {
        uri: "dmoz/Science/Anomalies_and_Alternative_Science/Flat_Earth",
        label: "dmoz/Science/Anomalies and Alternative Science/Flat Earth",
        wgt: 100,
      },
      {
        uri: "dmoz/Science/Astronomy/Extrasolar_Planets",
        label: "dmoz/Science/Astronomy/Extrasolar Planets",
        wgt: 100,
      },
      {
        uri: "dmoz/Science/Astronomy/Organizations",
        label: "dmoz/Science/Astronomy/Organizations",
        wgt: 100,
      },
      {
        uri: "news/Science",
        label: "news/Science",
        wgt: 59,
      },
    ],
    image:
      "https://sm.mashable.com/t/mashable_sea/article/w/watch-how-/watch-how-these-6-planets-orbit-their-star-in-perfect-sync_kg2t.1200.jpg",
    eventUri: "spa-3307588",
    sentiment: 0.1450980392156862,
    wgt: 439216976,
    relevance: 2,
  };

  function RenderComponent() {
    const { date, title, body, url, image, categories } = mockData;
    render(
      <NewsBanner
        loading={false}
        date={formatDate(date)}
        title={title}
        body={body}
        url={url}
        image={image}
        position="1"
      />
    );
  }
  it("should render the news banner component", () => {
    RenderComponent();
    expect(screen.getByTestId("newsbanner-div")).toBeTruthy();
  });
});
