import Basket from "./Basket";
import Product from "./Product";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/"> SOME AMAZING SHOP NAME</a>
      </header>
      <main>
        Product list
        <Container>
          <Basket />
          <Col>
            <Row>
              <Col>
                <Product details={1} />
              </Col>
              <Col>
                <Product details={2} />
              </Col>
              <Col>
                <Product details={3} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Product details={4} />
              </Col>
              <Col>
                <Product details={5} />
              </Col>
              <Col>
                <Product details={6} />
              </Col>
            </Row>
          </Col>
        </Container>
      </main>
      <footer>Academic</footer>
    </div>
  );
}

export default App;
