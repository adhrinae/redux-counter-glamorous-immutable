import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

const ButtonWrapper = glamorous.div({ display: "flex" });

const Button = glamorous.div(
  {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "3rem",
    color: "white",
    fontSize: "1.5rem",
    cursor: "pointer"
  },
  ({ buttonType }) => {
    const addStyle = {
      background: "#37b24d",
      ":hover": {
        background: "#40c057"
      }
    };
    const removeStyle = {
      background: "#f03e3e",
      ":hover": {
        background: "#fa5252"
      }
    };

    if (buttonType === "add") {
      return addStyle;
    } else if (buttonType === "remove") {
      return removeStyle;
    }
  }
);

const Buttons = ({ onCreate, onRemove }) => (
  <ButtonWrapper>
    <Button buttonType="add" onClick={onCreate}>
      생성
    </Button>
    <Button buttonType="remove" onClick={onRemove}>
      제거
    </Button>
  </ButtonWrapper>
);

Buttons.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
};

Buttons.defaultProps = {
  onCreate: () => console.warn("onCreate is not defined"),
  onRemove: () => console.warn("onRemove is not defined")
};

export default Buttons;
