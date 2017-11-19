import React from "react";
import Buttons from "./components/Buttons";
import CounterListContainer from "./containers/CounterListContainer";

import { connect } from "react-redux";
import * as actions from "./actions";

import { getRandomColor } from "./utils";

const App = ({ onCreate, onRemove }) => (
  <div className="App">
    <Buttons onCreate={onCreate} onRemove={onRemove} />

    <CounterListContainer />
  </div>
);

const mapDispatchToProps = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapDispatchToProps)(App);
