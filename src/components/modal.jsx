import React from "react";
import PropTypes from "prop-types";
import "../style/modal.scss";

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: "20vw",
      bottom: "20vw",
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: "20vw",
      zIndex: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      maxWidth: "70vw",
      minHeight: "40vh",
      margin: "0 auto",
      padding: 30
    };

    const shootsStyle = {
      marginTop: "80%",
      alignSelf: "center",
      border: "solid 1px black",
      boxShadow: "1px 1px"
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div className="shoots" style={shootsStyle}>
            <button onClick={this.props.onClose}>Shoots!</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
