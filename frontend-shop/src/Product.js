import React from "react";
import { connect } from "react-redux";
import { addToBasket } from "./actions";
import Card from "react-bootstrap/Card";

import { Button, Container } from "react-bootstrap";

function Product(props) {
  const handleAddToBasket = () => {
    props.addToBasket(props.product["id"]);
  };

  return (
    <Card style={{ width: "30rem", height: "35rem" }} className="text-center">
      <Card.Body>
        <Card.Title>{props.product["name"]}</Card.Title>
        <Card.Subtitle>{props.product["id"]}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <Button onClick={handleAddToBasket}>Add</Button>
      </Card.Footer>
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
