import Container from "react-bootstrap/Container";
import { useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function DetailCeleb() {
  let x = window.location.href;
  let currentId = x.split("=")[1];
  console.log(currentId);

  var my_text = "";
  fetch("https://imdb8.p.rapidapi.com/actors/get-bio?nconst=" + currentId, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "79a4776950msh3d4ec4a150e4a81p137132jsn57f1b4885731",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      window.my_text = data.miniBios[0].text;
      console.log(window.my_text);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Details</Card.Title>
            <Card.Text>{window.my_text}</Card.Text>
            <Button href="/" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default DetailCeleb;
