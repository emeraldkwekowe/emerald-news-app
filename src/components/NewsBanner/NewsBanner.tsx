import { memo } from "react";
import { BodyText, NewsBannerContainer } from "./styles";
import Button from "../Button/Button";
import { ReactComponent as ArrowRight } from "../../Assets/Icon-feather-arrow-up-right.svg";
import { getPrimaryCategory, reduceTextSize } from "../../helpers/functions";
import LoadingCard from "../LoadingCard/LoadingCard";

interface Props {
  small?: boolean;
  className?: string;
  date: string;
  title: string;
  url: string;
  image: string;
  categories?: { label?: string }[];
  body?: string;
  newsDesk?: string;
  loading: boolean;
  position: "1" | "2" | "3";
}

function NewsBanner(props: Props) {
  const {
    small,
    className,
    date,
    title,
    url,
    image,
    categories,
    body,
    loading,
    position,
    newsDesk,
  } = props;
  return (
    <>
      {loading && position === "1" && <LoadingCard />}
      {loading && position === "2" && (
        <LoadingCard height={380} mb={25} delay="delay3" />
      )}
      {loading && position === "3" && (
        <LoadingCard height={380} delay="delay4" />
      )}
      {title && (
        <NewsBannerContainer
          href={url}
          target="_blank"
          rel="norefferer"
          style={{
            backgroundImage: `url(${image})`,
          }}
          data-testid="newsbanner-div"
          className={`animated fadeInUp ${small ? "small" : ""} ${
            className || ""
          }`}
          role="img"
          aria-label={title}
        >
          <div>
            <span>{date}</span>
            <span className="outline">
              {categories ? getPrimaryCategory(categories) : newsDesk}
            </span>
          </div>
          <h2>
            <span>
              {small ? reduceTextSize(title, 70) : reduceTextSize(title, 120)}
            </span>
          </h2>
          {!small && <BodyText>{body && reduceTextSize(body, 500)}</BodyText>}
          <Button variant="filled" className="white">
            <ArrowRight />
          </Button>
        </NewsBannerContainer>
      )}
    </>
  );
}

export default memo(NewsBanner);
