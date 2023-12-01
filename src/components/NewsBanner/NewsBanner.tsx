import { memo } from "react";
import { NewsBannerContainer } from "./styles";
import Button from "../Button/Button";
import { ReactComponent as ArrowRight } from "../../Assets/Icon-feather-arrow-up-right.svg";

interface Props {
  small?: boolean;
  className?: string;
}

function NewsBanner({ small, className }: Props) {
  return (
    <NewsBannerContainer
      data-testid="newsbanner-div"
      className={`animated fadeInUp ${small ? "small" : ""} ${className || ""}`}
    >
      <div>
        <span>Sep 06, 2022</span> <span className="outline">Travel</span>
      </div>
      <h2>
        <span>Get to your dream now destinations with TravelPro</span>
      </h2>
      <Button variant="filled" className="white">
        <ArrowRight />
      </Button>
    </NewsBannerContainer>
  );
}

export default memo(NewsBanner);
