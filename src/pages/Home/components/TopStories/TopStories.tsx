import LoadingCard from "../../../../components/LoadingCard/LoadingCard";
import { LeftSection, RightSection, TopStoriesContainer } from "./styles";

function TopStories() {
  return (
    <TopStoriesContainer>
      <LeftSection>
        <h1>Best of the week.</h1>
        <LoadingCard />
      </LeftSection>
      <RightSection>
        <LoadingCard height={380} mb={25} />
        <LoadingCard height={380} />
      </RightSection>
    </TopStoriesContainer>
  );
}

export default TopStories;
