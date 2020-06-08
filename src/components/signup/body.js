import React from "react";
import PropTypes from "prop-types";

import Form from "./form";

function SignBody() {
  return (
    <div>
      <Form />
    </div>
  );
}

SignBody.propTypes = {
  onAddUser: PropTypes.func,
};

export default SignBody;
