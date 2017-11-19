import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

const StyledCounter = glamorous.div(
  {
    width: "10rem",
    height: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem",
    color: "white",
    fontSize: "3rem",
    borderRadius: "100%",
    cursor: "pointer",
    userSelect: "none",
    transition: "background-color 0.75s"
  },
  ({ color }) => ({
    backgroundColor: color
  })
);

const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor }) => (
  <StyledCounter
    onClick={() => onIncrement(index)}
    onContextMenu={e => {
      e.preventDefault();
      onIncrement(index);
    }}
    onDoubleClick={() => onSetColor(index)}
    color={color}
  >
    {number}
  </StyledCounter>
);

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: "black",
  onIncrement: () => console.warn("onIncrement is not defined"),
  onDecrement: () => console.warn("onDecrement is not defined"),
  onSetColor: () => console.warn("onSetColor is not defined")
};

export default Counter;
