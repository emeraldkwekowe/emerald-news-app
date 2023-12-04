import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes as RouteContainer,
} from "react-router-dom";

//Lazy loading for improved performance
let Home = lazy(() => import("../pages/Home/Home"));
let Search = lazy(() => import("../pages/Search/Search"));

function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <RouteContainer>
          <Route path="/" Component={Home} />
          <Route path="/search" Component={Search} />
          <Route
            path="*"
            element={
              <div>
                <h1>Page not found</h1>
                <Link to="/">Go home</Link>
              </div>
            }
          />
        </RouteContainer>
      </Suspense>
    </BrowserRouter>
  );
}

const AppLoader = () => {
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <p style={{ textAlign: "center", width: "100%" }}>
        Loading application...
      </p>
    </div>
  );
};

export default Routes;
