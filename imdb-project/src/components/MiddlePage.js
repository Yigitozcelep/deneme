import CelebretiesBox from "./CelebretiesBox";
import CelebData from "../celebData";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function MiddlePage(props) {
  let my_data = [];
  if (props.sort === "sort-by-age") {
    my_data = CelebData.sort(function (a, b) {
      return (
        parseInt(a.date.replace("-", "")) - parseInt(b.date.replace("-", ""))
      );
    });
  } else if (props.sort === "sort-by-height") {
    my_data = CelebData.sort(function (a, b) {
      return parseInt(a.height) - parseInt(b.height);
    });
  } else {
    my_data = CelebData;
  }
  console.log(my_data);
  console.log(props.sort);

  let something = (
    <div className="bg-dark">
      <Container className="bg-dark">
        {my_data.map((myCeleb, index) => {
          console.log(!index % 3);
          if (index % 3 === 0) {
            return (
              <Row key={index}>
                <Col>
                  <CelebretiesBox myCelebData={myCeleb} key={index} />
                </Col>
                <Col>
                  <CelebretiesBox
                    myCelebData={my_data[index + 1]}
                    key={index}
                  />
                </Col>
                <Col>
                  <CelebretiesBox
                    myCelebData={my_data[index + 2]}
                    key={index + 2}
                  />
                </Col>
              </Row>
            );
          }
          return null;
        })}
      </Container>
    </div>
  );

  return something;
}

export default MiddlePage;
