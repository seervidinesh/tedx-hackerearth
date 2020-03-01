const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = validateSearchInput = data => {
  let errors = {};

  data.event = !isEmpty(data.event) ? data.event : "";

  if (Validator.isEmpty(data.event)) {
    errors.event = "Event name is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
