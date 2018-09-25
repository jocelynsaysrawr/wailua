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
        <h2>Mission statement:</h2>
        <br />
          <p>
 This place-based web-app is specifically built for ʻohana and communities on Kauaʻi connected to Wailua and will be a space to learn about our “impacted” places within Wailua Kauaʻi and their cultural and oral histories. The purpose of this site is for the community to use it as a resource to interactively engage in knowledge while at these sites (of impact) and to ultimately build a consciousness of the sites importance as a means to begin to erase settler colonial narratives that currently dominate these impacted places in Wailua, Kauaʻi.
 </p>
<br />
  
<h2>About the Ahupuaʻa:</h2>
<br />
<p>
 Wailua is the largest of the fifteen windward ahupuaʻa (socio-political land units) that comprise the district of Puna, and contains 20,255 acres that was once divided into two parts, Wailua Makai, which contained 2,800 acres and Mauka. Wailua Makai was known as Wailua-nui-ʻaho-ano and was the seat of political power as well as one of the most sacred regions for the Kauaʻi chiefdom.
  
 As important wahi pana (storied place), it is unique in the sense that it has the longest and only navigable river (32 km) in our homeland, formed by the confluence of its north and south forks and numerous permanent and semi-permanent streams and tributaries that begin near Waiʻaleʻale, the wettest spot on Earth and that drains into a vast productive inland agricultural region.
  
 Along the major geographical feature, Wailua River, are alluvial flats which were once used for agricultural cultivation in the prehistoric period, found along with a number of significant sacred sites and features, including burials, heiau, birthing stones (Pōhaku hānau), a bell stone (Pōhaku kani), fishponds (Loko i‘a), canoe landings (Pae Wa‘a), and petroglyphs (Ki‘i pōhaku: Pae Ki‘i Mahu) some of which can still be seen today.
</p> 
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
