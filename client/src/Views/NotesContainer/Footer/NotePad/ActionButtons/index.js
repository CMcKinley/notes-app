import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ClearIcon from "@material-ui/icons/Clear";
import SubmitIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(() => ({
  fab: {
    margin: "8px"
  },
  actionButtons: {
    display: "flex",
    flexDirection: "column"
  }
}));

const ActionButtons = ({ handleSubmit, disableSubmit, handleCancel }) => {
  const classes = useStyles();

  return (
    <div className={classes.actionButtons}>
      <Fab
        size="small"
        aria-label="add"
        onClick={handleSubmit}
        className={classes.fab}
        disabled={disableSubmit}
      >
        <SubmitIcon />
      </Fab>
      <Fab
        size="small"
        aria-label="add"
        onClick={handleCancel}
        className={classes.fab}
      >
        <ClearIcon />
      </Fab>
    </div>
  );
};

ActionButtons.propTypes = {
  disableSubmit: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func
};

ActionButtons.defaultProps = {
  disableSubmit: false,
  handleSubmit: function() {},
  handleCancel: function() {}
};

export default memo(ActionButtons);
