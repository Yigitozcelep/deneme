import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";

function TopBar() {
  return (
    <Row>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/sort-by-age">Sort by Age</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/sort-by-Height">Sort By Height</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Detail</Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
  );
}

export default TopBar;
