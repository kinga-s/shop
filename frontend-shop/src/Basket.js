import { connect } from "react-redux";

function Basket(props) {
  return (
    <div>
      <p>
        {props.items_in_basket.map((item, _) => (
          <>{item}</>
        ))}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items_in_basket: state.items_in_basket,
  };
};

// Connecting the component to the Redux store using connect
export default connect(mapStateToProps)(Basket);
