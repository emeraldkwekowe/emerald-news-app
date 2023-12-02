import { ErrorContainer } from "./styles";
import { ReactComponent as ErrorIMG } from "../../Assets/error.svg";
import Button from "../Button/Button";

function Error() {
  return (
    <ErrorContainer
      data-testid="app-error-component"
      className="animated fadeIn"
    >
      <ErrorIMG
        style={{ height: "15vw" }}
        className="animated fadeInUp delay2"
      />
      <h4 className="animated fadeInUp delay3">Something is wrong..</h4>
      <p className="animated fadeInUp delay3">
        You should be seeing news, not this error message. I believe you have
        done nothing to deserve this error, hence I shamefully ask that you
        please refresh.
      </p>
      <Button
        className="animated fadeInUp delay4 red"
        variant="filled"
        onClick={() => (window.location.href = "")}
      >
        Refresh page
      </Button>
    </ErrorContainer>
  );
}

export default Error;
