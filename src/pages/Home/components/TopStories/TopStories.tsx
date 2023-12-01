// import LoadingCard from "../../../../components/LoadingCard/LoadingCard";
import NewsBanner from "../../../../components/NewsBanner/NewsBanner";
import { LeftSection, RightSection, TopStoriesContainer } from "./styles";

function TopStories() {
  return (
    <TopStoriesContainer>
      <LeftSection>
        <h1 className="animated fadeInUp delay3">Best of the week.</h1>
        <NewsBanner className="delay4" />
      </LeftSection>
      <RightSection>
        <NewsBanner small className="delay5" />
        <NewsBanner small className="delay5" />

        {/* <LoadingCard height={380} mb={25} />
        <LoadingCard height={380} /> */}
      </RightSection>
    </TopStoriesContainer>
  );
}

export default TopStories;
