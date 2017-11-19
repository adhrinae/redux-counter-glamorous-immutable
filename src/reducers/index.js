import * as types from "../actions/ActionTypes";
import { fromJS, Map } from "immutable";

const initState = fromJS([
  {
    color: "black",
    number: 0
  }
]);

function counterReducer(state = initState, action) {
  switch (action.type) {
    case types.CREATE:
      return state.push(
        Map({
          color: action.color,
          number: 0
        })
      );
    case types.REMOVE:
      return state.pop();
    case types.INCREMENT:
      return state.updateIn([action.index, "number"], num => num + 1);
    case types.DECREMENT:
      return state.updateIn([action.index, "number"], num => num - 1);
    case types.SET_COLOR:
      return state.setIn([action.index, "color"], action.color);
    default:
      return state;
  }
}

export default counterReducer;
