import React from "react";
import Modal from "./modal";
import { fireModal, selectGeo } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import "../style/modal.scss";

class ModalParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.modalOn === true) {
      this.toggleModal();
      this.props.fireModal(false);
    }
  }

  render() {
    return (
      <div className="ModalParent">
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <h2>You have entered </h2>
          <b />
          <h1>{this.props.activeGeo.properties.title}</h1>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeLocation: state.activeLocation,
    modalOn: state.modalOn,
    activeGeo: state.activeGeo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fireModal: fireModal,
      selectGeo: selectGeo
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalParent);
