import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { List } from "immutable";

import Counter from "./Counter";

const ListWrapper = glamorous.div({
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
});

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      number={counter.get("number")}
      color={counter.get("color")}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));

  return <ListWrapper>{counterList}</ListWrapper>;
};

CounterList.propTypes = {
  counters: PropTypes.instanceOf(List),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

CounterList.defaultProps = {
  counters: [],
  onIncrement: () => console.warn("onIncrement is not defined"),
  onDecrement: () => console.warn("onDecrement is not defDeed"),
  onSetColor: () => console.warn("onSetColor is not defined")
};

export default CounterList;
