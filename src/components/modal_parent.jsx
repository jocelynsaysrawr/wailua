import React from "react";
import Modal from "./modal";
import { fireModal, selectGeo } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

const Paragraph = styled.p`
  &.modal {
    font-family: 'Arial', Helvetica, sans-serif;
    font-size: 16px;
    color: white;
  }

`

const Title = styled.h2`
  font-family: 'Arial', Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: white;
`



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
         <Title>MISSION & PURPOSE</Title>
          <br />
          <Paragraph className="modal">
          This place-based web-app is specifically built for ʻohana and communities on Kauaʻi connected to Wailua and will be a space to learn about our “impacted” places within Wailua Kauaʻi and their cultural and oral histories. 
          </Paragraph>
          <br />
          <Paragraph className="modal">Tangible impacts refer to physical impacts that occur through high amount of traffic, recreation, or alteration to a place. Versus intangible impacts, which refer to non-physical impacts culturally and spiritually through a system that continues to circulate the settler colonial narratives that hurts the psychological health and well-being of the community.</Paragraph>
          <br/>
          <Paragraph className="modal">The purpose of this site is for the community to use it as a resource to interactively engage in knowledge while at these sites (of impact) and to ultimately build a consciousness of the sites importance as a means to begin to erase settler colonial narratives that currently dominate these impacted places in Wailua, Kauaʻi.</Paragraph>
  
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
