import TopBar from "./TopBar";
import MiddlePage from "./MiddlePage";
import Container from "react-bootstrap/Container";

function FirstPage(props) {
  return (
    <Container>
      <TopBar />
      <MiddlePage sort={props.sort} />
    </Container>
  );
}

export default FirstPage;
