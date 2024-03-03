import React from "react";
import { connect } from "react-redux";
import { addToBasket } from "./actions";

import { Button } from "react-bootstrap";

function Product(props) {
  const handleAddToBasket = () => {
    props.addToBasket(props.details);
  };

  return (
    <div>
      <>{props.details}</>
      <Button onClick={handleAddToBasket}>Add</Button>
    </div>
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
