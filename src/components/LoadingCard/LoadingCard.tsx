import { memo } from "react";
import ContentLoader from "react-content-loader";

interface LoadingCardTypes {
  height?: number;
  mb?: number;
  delay?: string;
}

const LoadingCard = ({ height = 600, mb = 0, delay }: LoadingCardTypes) => (
  <>
    <div
      data-testid="loading-card"
      className={`animated fadeInUp ${delay ? delay : "delay3"}`}
      style={{ marginBottom: mb }}
    >
      <ContentLoader
        width={"100%"}
        speed={1}
        height={height}
        backgroundColor="#fff"
        foregroundColor="#f3f3f3"
      >
        <rect x="0" y="0" rx="25" ry="25" width="100%" height="100%" />
      </ContentLoader>
    </div>
  </>
);

export const NewsListLoader = ({
  size = "large",
}: {
  size?: "large" | "small";
}) => {
  const isLarge = size === "large";
  return (
    <>
      <ContentLoader
        viewBox={`43 0 360 200`}
        title="Loading news..."
        backgroundColor={isLarge ? `#fff` : `#f5f6f7`}
        foregroundColor={isLarge ? `#f3f3f3` : "#eee"}
      >
        <rect x="42.84" y="9.93" rx="5" ry="5" width="143.55" height="86.59" />
        <rect x="192.84" y="9.67" rx="0" ry="0" width="148.72" height="12.12" />
        <rect x="192.84" y="25.67" rx="0" ry="0" width="89" height="9" />

        <rect x="42.84" y="107" rx="5" ry="5" width="143.55" height="86.59" />
        <rect x="192.84" y="107" rx="0" ry="0" width="148.72" height="12.12" />
        <rect x="192.84" y="123" rx="0" ry="0" width="89" height="9" />
      </ContentLoader>
    </>
  );
};

export default memo(LoadingCard);
