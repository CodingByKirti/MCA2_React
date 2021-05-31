import React from "react";
import PropTypes from "prop-types";
export const Sum = (props) => {
  return (
    <div>
      <h1>
        {props.a} +{props.b} = {props.a + props.b}
      </h1>
    </div>
  );
};

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.string,
};

Sum.defaultProps = {
  a: 10,
  b: 100,
};
