import React, { Component } from "react";

const sortedNavArray = this.props.navs.features.sort((a, b) => {
    return a.geometry.coordinates[0] > b.geometry.coordinates[0] ? 1 : -1;
  });

export default class MapLeftArrowButton extends Component {

    static propTypes = {
        navs: PropTypes.object.isRequired,
        geofences: PropTypes.object.isRequired,
        activeLocation: PropTypes.string.isRequired,
        activeNav: PropTypes.object.isRequired,
        userLocation: PropTypes.array.isRequired,
        centerZoom: PropTypes.object.isRequired
      };

      componentWillMount(){

      };
      
  render() {
    
    return (
      <div>
          <button {...this.props} className="map-arrow-btn">
            {this.props.name}
          </button>
      </div>
    );
  }
};

function mapStateToProps(state) {
    return {
      navs: state.navs,
      geofences: state.geofences,
      activeLocation: state.activeLocation,
      activeNav: state.activeNav,
      userLocation: state.userLocation,
      centerZoom: state.centerZoom
    };
  }
  
  export default connect(
    mapStateToProps
  )(MapLeftArrowButton);




cycleNavs(direction, sNavArray) {
    let activeNavIndex;
    sNavArray.forEach((nav, i) => {
      const myNavCoord = nav.geometry.coordinates;
      if (
        myNavCoord[0] === this.props.activeNav.geometry.coordinates[0] &&
        myNavCoord[1] === this.props.activeNav.geometry.coordinates[1]
      ) {
        activeNavIndex = i;
      }
    });
    console.log("anI: ", activeNavIndex);
    if (direction === "left") {
      if (activeNavIndex === 0) {
        this.props.selectNav(sNavArray[sNavArray.length - 1]);
        this.props.selectLocation(
          sNavArray[sNavArray.length - 1].properties.location
        );
      } else {
        this.props.selectNav(sNavArray[activeNavIndex - 1]);
        this.props.selectLocation(
          sNavArray[activeNavIndex - 1].properties.location
        );
      }
    } else if (direction === "right") {
      if (activeNavIndex === sNavArray.length - 1) {
        this.props.selectNav(sNavArray[0]);
        this.props.selectLocation(sNavArray[0].properties.location);
      } else {
        this.props.selectNav(sNavArray[activeNavIndex + 1]);
        this.props.selectLocation(
          sNavArray[activeNavIndex + 1].properties.location
        );
      }
    }
  }

      //Adds quick navigation controls and location name
      const leftArrowButton = document.createElement("button");
      leftArrowButton.style.backgroundImage = "url(../assets/arrow-left.png)";
      leftArrowButton.addEventListener("click", () => {
        this.cycleNavs("left", sortedNavArray);
      });

      const rightArrowButton = document.createElement("button");
      rightArrowButton.style.backgroundImage = "url(../assets/arrow-right.png)";
      rightArrowButton.addEventListener("click", () => {
        this.cycleNavs("right", sortedNavArray);
      });

      const ctrlBotLeft = document.getElementsByClassName(
        "mapboxgl-ctrl-bottom-left"
      )[0];
      console.log("cBl: ", ctrlBotLeft);
      const ctrlBotRight = document.getElementsByClassName(
        "mapboxgl-ctrl-bottom-right"
      )[0];
      if (ctrlBotLeft && ctrlBotRight && buttonsAdded === false) {
        ctrlBotLeft.innerHTML = leftArrowButton;
        ctrlBotRight.innerHTML = rightArrowButton;
        buttonsAdded = true;
      }