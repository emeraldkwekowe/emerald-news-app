import ContentLoader from "react-content-loader";

type LoadingCardTypes = {
  height?: number;
  mb?: number;
};

const LoadingCard = ({ height = 600, mb = 0 }: LoadingCardTypes) => (
  <>
    <div data-testid="loading-card" style={{ marginBottom: mb }}>
      <ContentLoader width={"100%"} speed={1} height={height}>
        <rect x="0" y="0" rx="25" ry="25" width="100%" height="100%" />
      </ContentLoader>
    </div>
  </>
);

export default LoadingCard;