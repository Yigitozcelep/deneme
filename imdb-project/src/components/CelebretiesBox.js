import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

function CelebretiesBox(props) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card
        border="danger"
        bg="dark"
        text="white"
        style={{ width: "18rem", height: "36rem" }}
      >
        <Card.Img
          style={{ width: "18", height: "25rem" }}
          variant="top"
          src={props.myCelebData.imageAdress}
        />
        <Card.Body>
          <Card.Title>
            <h3>{props.myCelebData.celebName}</h3>
            <h6>Birth: {props.myCelebData.date}</h6>
            <h6>Height: {props.myCelebData.height}</h6>
          </Card.Title>
          <Card.Text></Card.Text>
          <Button href={`/home?id=${props.myCelebData.id}`} variant="primary">
            Learn more
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default CelebretiesBox;
