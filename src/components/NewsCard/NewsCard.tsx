import { memo } from "react";
import { NewsCardContainer } from "./styles";
import { reduceTextSize } from "../../helpers/functions/functions";

interface Props {
  title: string;
  image: string;
  date: string;
  url: string;
  categories?: { label?: string }[];
  body: string;
  source: { uri: string };
  activeCategory?: string;
}

function NewsCard(props: Props) {
  const { title, body, image, url, date, source } = props;

  return (
    <NewsCardContainer
      href={url}
      target="_blank"
      rel="norefferer"
      className="animated fadeInUp"
      data-testid="newscard-div"
      role="img"
      aria-label={title}
    >
      <div className="image">
        <img src={image} alt={title} />
        <div style={{ backgroundImage: `url(${image})` }}></div>
      </div>

      <div className="text">
        <h4>
          <b> {source?.uri}</b>
          <span>{date}</span>
        </h4>
        <h3>{title}</h3>
        <p>{reduceTextSize(body, 350)}</p>
        <p className="a">Read more &gt;&gt; </p>
      </div>
    </NewsCardContainer>
  );
}

export function NewsCardSmall(props: {
  title: string;
  url: string;
  source: string;
  date: string;
}) {
  const { title, url, date, source } = props;

  return (
    <NewsCardContainer
      href={url}
      target="_blank"
      rel="norefferer"
      className="animated fadeInUp small"
      data-testid="newscard-div-small"
      role="img"
      aria-label={title}
    >
      <h4>
        {source}
        <span>{date}</span>
      </h4>
      <h3>{title}</h3>
    </NewsCardContainer>
  );
}

export default memo(NewsCard);
