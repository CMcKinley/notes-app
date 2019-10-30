import React, { memo } from "react";
import PropTypes from "prop-types";
import moment from "moment";

const DateText = ({ dateToDisplay, text }) => {
  // Format date to be displayed
  const formattedDate = dateToDisplay
    ? moment(dateToDisplay).format("MMMM, DD, YYYY")
    : null;
  // Format time to be displayed
  const formattedTime = dateToDisplay
    ? moment(dateToDisplay).format("h:mma")
    : null;
  // Get and format today's date to be compared
  const today = moment().format("MMMM, DD, YYYY");

  // Render Date text
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
