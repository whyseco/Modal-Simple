import React, { Component } from "react";
import { Modal as ModalBoot } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

class Footer extends Component {
  static displayName = "Modal.Footer";

  renderButtons = () => {
    var cancel;
    var validate;
    if (this.props.cancel.defaultProp && this.props.validate.defaultProp) {
      cancel = this.props.cancel;
      validate = this.props.validate;
      return this.showButtons(cancel, validate);
    }
    if (this.props.cancel || this.props.validate) {
      if (this.props.cancel.defaultProp) {
        cancel = false;
      } else {
        cancel = this.props.cancel;
      }
      if (this.props.validate.defaultProp) {
        validate = false;
      } else {
        validate = this.props.validate;
      }

      return this.showButtons(cancel, validate);
    }
  };
  showButtons = (cancel, validate) => {
    return (
      <ModalBoot.Footer className={this.props.className}>
        {cancel && (
          <Button
            className={cancel.className}
            onClick={cancel.action || this.props.onHide}
            variant={cancel.variant}
          >
            {cancel.text}
          </Button>
        )}

        {validate && (
          <Button
            className={validate.className}
            onClick={validate.action || this.props.onHide}
            variant={validate.variant}
          >
            {validate.text}
          </Button>
        )}
      </ModalBoot.Footer>
    );
  };

  render() {
    return this.renderButtons();
  }
}
Footer.propTypes = {
  onHide: PropTypes.func,
  cancel: PropTypes.shape({
    text: PropTypes.string,
    className: PropTypes.string,
    action: PropTypes.func,
    variant: PropTypes.string
  }),
  validate: PropTypes.shape({
    text: PropTypes.string,
    className: PropTypes.string,
    action: PropTypes.func,
    variant: PropTypes.string
  })
};
Footer.defaultProps = {
  cancel: {
    text: "Cancel",
    className: "btn-cancel",
    variant: "secondary",
    defaultProp: true
  },
  validate: {
    text: "Save change",
    className: "btn-valid",
    variant: "primary",
    defaultProp: true
  }
};
export default Footer;
