import React from "react";
import { connect } from "react-redux";
import { addToBasket } from "./actions";
import { Card, Modal } from "react-bootstrap";
import { useState } from "react";

import { Button } from "react-bootstrap";

function Product(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToBasket = () => {
    props.addToBasket(props.product["id"]);
    setShow(false);
  };

  return (
    <Card style={{ width: "30rem", height: "35rem" }} className="text-center">
      <Card.Body>
        <Button variant="secondary" size="lg" onClick={handleShow}>
          <Card.Img variant="top" src="./photos/plant.png" />
        </Button>

        <Card.Title>{props.product["name"]}</Card.Title>
        <Card.Subtitle>{props.product["id"]}</Card.Subtitle>
      </Card.Body>

      <Modal show={show} onHide={handleClose} className="text-center" centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.product["name"]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src="./photos/plant.png" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" onClick={handleAddToBasket}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    items_in_basket: state.items_in_basket,
  };
};

const mapDispatchToProps = {
  addToBasket,
};

// Connecting the component to the Redux store using connect
export default connect(mapStateToProps, mapDispatchToProps)(Product);
