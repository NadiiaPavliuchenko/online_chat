import { Comment } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        color="#fff"
        backgroundColor="#0b69a3"
      />
    </LoaderContainer>
  );
};

export default Loader;
