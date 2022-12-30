import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const Holiday = () => {

  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <h1 className="centered">Best wishes for a grand 2023</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Holiday;