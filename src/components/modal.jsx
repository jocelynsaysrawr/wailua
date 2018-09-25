import React from "react";
import PropTypes from "prop-types";
// import "../style/modal.scss";

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: "27vw",
      bottom: "27vw",
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: "15vw",
      zIndex: 50,
      boxShadow: "1px 1px",
      textAlign: "center",
      fontSize: "1.2em",
      color: "black"
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      position: "fixed",
      top: "30vw",
      bottom: "30vw",
      overflow: "scroll",
      borderRadius: 5,
      maxWidth: "70vw",
      minHeight: "30vh",
      margin: "0 auto",
      padding: 30,
      //marginTop: "6vh",
      fontFamily: "courier",
      backgroundImage:
        "url('https://media.gettyimages.com/photos/sand-background-with-footprints-picture-id176993946?b=1&k=6&m=176993946&s=612x612&w=0&h=iuWXiM9lj3FImEmSBnMJaGO1oTEIFGrfpv86O3--y1o=')"
    };

    const shootsStyle = {
      marginTop: "20px",
      alignSelf: "center",
      border: "solid 1px black",
      boxShadow: "1px 1px",
      backgroundColor: "#ffed9a"
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div className="shoots" style={shootsStyle}>
            <button onClick={this.props.onClose}>
              <h2>Shooooots!</h2>
            </button>
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
