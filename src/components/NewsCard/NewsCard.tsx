import { memo } from "react";
import { NewsCardContainer } from "./styles";
import { getPrimaryCategory, reduceTextSize } from "../../helpers/functions";

interface Props {
  title: string;
  image: string;
  date: string;
  url: string;
  categories: { label?: string }[];
  body: string;
  source: { uri: string };
  activeCategory: string;
}

function NewsCard(props: Props) {
  const { title, body, image, categories, url, date, source, activeCategory } =
    props;

  return (
    <NewsCardContainer
      href={url}
      target="_blank"
      rel="norefferer"
      className="animated fadeInUp"
      data-testid="newscard-div"
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="text">
        <h4>
          {activeCategory === "all"
            ? getPrimaryCategory(categories)
            : activeCategory}{" "}
          - <b> {source?.uri}</b>
          <span>{date}</span>
        </h4>
        <h3>{title}</h3>
        <p>{reduceTextSize(body, 350)}</p>
        <p className="a">Read more &gt;&gt; </p>
      </div>
    </NewsCardContainer>
  );
}

export default memo(NewsCard);
