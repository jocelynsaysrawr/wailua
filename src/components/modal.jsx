import React from "react";
import PropTypes from "prop-types";
import { Backdrop, Button, StyledModal } from '../style/modal-style';


class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }
    return (
   
        <StyledModal>
          {this.props.children}

          <div>
            <Button onClick={this.props.onClose}>
              <h2>Enter ʻĀinafinda</h2>
            </Button>
          </div>
        </StyledModal>

    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
