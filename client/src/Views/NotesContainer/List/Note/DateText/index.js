import React, { memo } from "react";
import PropTypes from "prop-types";
import moment from "moment";

const DateText = ({ dateToDisplay, text }) => {
  const formattedDate = dateToDisplay
    ? moment(dateToDisplay).format("MMMM, DD, YYYY")
    : null;
  const formattedTime = dateToDisplay
    ? moment(dateToDisplay).format("h:mma")
    : null;
  const today = moment().format("MMMM, DD, YYYY");

  return (
    <span>
      {text} {today === formattedDate ? "Today" : formattedDate} at{" "}
      {formattedTime}
    </span>
  );
};

DateText.propTypes = {
  text: PropTypes.string,
  dateToDisplay: PropTypes.string
};

DateText.defaultProps = {
  text: "",
  dateToDisplay: ""
};

export default memo(DateText);
