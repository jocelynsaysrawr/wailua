import React, { Component } from "react";
// import { stack as Menu } from "react-burger-menu";
// import NavList from "./nav_list";
import { Link } from "react-router-dom";
import {DropdownContainer} from '../style/hamburger-style';
import '../style/hamburger.scss';

class HamburgerMenu extends Component {
  constructor(props) {
    super(props)
    this.checkbox = this.checkbox.bind(this);
    this.setBoxName = this.setBoxName.bind(this);
    this.state = {
      checked: document.getElementById('test') ? document.getElementById('test').checked : false,
      openBoxes: []
    }
    console.log('this.state: ', this.state)
  }

  checkbox() {
    this.setState({checked: document.getElementById('test').checked})
    console.log("fired")
  }

  uncheck() {
    document.getElementById('test').checked = false;
  }

  showNav(box) {
    // if (this.state.openBoxes.includes(box)){
      let x = document.getElementById(box)
      console.log("x: ", x);
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
    // }
  }

  setBoxName(box) {
    if (this.state.openBoxes.includes(box)) {
      let index = this.state.openBoxes.indexOf(box);
      console.log(index);
      this.state.openBoxes.splice(index, 1);
      console.log('stuff: ', this.state.openBoxes);
    } else {
      this.setState({openBoxes: [...this.state.openBoxes, box]})
    }
  }

  componentDidUpdate() {
    console.log("prevProps", this.state)
    if (!this.state.checked && this.state.openBoxes.length > 0) {

      this.state.openBoxes.forEach(box => {
        let x = document.getElementById(box)
        console.log("x updated: ", x);
        if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
      })

      this.setState({openBoxes: []})
    
    }
 
  }

  render() {
    let toggleShow = 'hidden';
    if (!this.state.checked) {
      console.log("toggleShow: ", this.state.checked)
      toggleShow = 'hidden';
    } else {
      console.log("toggleShow: ", this.state.checked)
      toggleShow = 'show';
    }
    console.log("props: ", this.state)
    return (
      <div className='hamburger'>
        <div id="menu-toggle">
          <input id="test" type="checkbox" onChange={this.checkbox}/>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={toggleShow}>
        <button><a href="#">Mission and Purpose</a></button>
        <button onClick={() => {
          this.uncheck();
          this.setState({checked: false})
        }}><Link to={"/preservation"}>Preservation and Practice</Link></button>
        <button onClick={() => {this.setBoxName("mokupuni"); this.showNav("mokupuni")}}>Mokupuni (Island)</button>
          <DropdownContainer id="mokupuni">
            <button onClick={() => {this.setBoxName("niihau"); this.showNav("niihau")}}>Niʻihau</button>
              <DropdownContainer id="niihau" className="moku">
                <h3>Moku (District)</h3>
                <button>Koʻolau</button><br />
                <button>Kona</button><br />
                <button>Puna</button><br />
              </DropdownContainer>
            <button onClick={() => {this.setBoxName("kauai"); this.showNav("kauai")}}>Kauaʻi</button>
              <DropdownContainer id="kauai" className="moku">
                <h3>Moku (District)</h3>
                <button onClick={() => {this.setBoxName("puna"); this.showNav("puna")}}>Puna</button>
                  <DropdownContainer id="puna" className="ahupuaa">
                    <h3>Ahupuaʻa (Land Division)</h3>
                    <button>Kīpū</button>
                    <button>Haʻikū</button>
                    <button>Niumalu</button>
                    <button>Kalapakī</button>
                    <button>Hanamāʻulu</button>
                    <button onClick={() => {this.setBoxName("wailua"); this.showNav("wailua")}}>Wailua</button>
                      <DropdownContainer id="wailua" className="info">
                        <Link to={"/about"} onClick={() => {
          this.uncheck();
          this.setState({checked: false})
        }}>About</Link>
                        <button onClick={() => {this.setBoxName("wailua-sites"); this.showNav("wailua-sites")}}>Sites</button>
                          <DropdownContainer id="wailua-sites" className="sites">
                          <ul>
                            <li><a href="#">Wailua River</a></li>
                            <li><a href="#">Wailua Beach</a></li>
                            <li><a href="#">Lydgate</a></li>
                            <li><a href="#">ʻOpaekaʻa</a></li>
                            <li><a href="#">Fern Grotto</a></li>
                          </ul>                           
                          </DropdownContainer>
                        <a href="#">References</a>
                      </DropdownContainer>
                    <button>ʻOlohena</button>
                    <button>Waipouli</button>
                    <button>Kapaʻa</button>
                    <button>Keālia</button>
                    <button>Kamalomaloʻo</button>
                  </DropdownContainer>
                <button onClick={() => {this.setBoxName("koolau"); this.showNav("koolau")}}>Koʻolau</button>
                  <DropdownContainer id="koolau" className="ahupuaa">
                    <h3>Ahupuaʻa (Land Division)</h3>
                    <button>Anahola</button>
                    <button>Aliomanu</button>
                    <button>Papaʻa</button>
                    <button>Waiakalua</button>
                    <button>Moloaʻa</button>
                    <button>Kaʻakaʻaniu</button>
                    <button>Lepeuli</button>
                    <button>Waipakē</button>
                    <button>Pīlaʻa</button>
                    <button>Waiakalua</button>
                    <button>Kāhili</button>
                    <button>Kīlauea</button>
                    <button>Nāmāhana</button>
                  </DropdownContainer>
                <button onClick={() => {this.setBoxName("halelea"); this.showNav("halelea")}}>Haleleʻa</button>
                  <DropdownContainer id="halelea" className="ahupuaa">
                    <h3>Ahupuaʻa (Land Division)</h3>
                    <button>Kalihiwai</button>
                    <button>Kalihikai</button>
                    <button>Pupoa</button>
                    <button>Hanalei</button>
                    <button>Waiʻoli</button>
                    <button>Waipā</button>
                    <button>Waikoko</button>
                    <button>Lumahaʻi</button>
                    <button>Wainiha</button>
                    <button>Hāʻena</button>
                    <button>Limahuli</button>
                  </DropdownContainer>
                <button onClick={() => {this.setBoxName("pali"); this.showNav("pali")}}>Nā Pali</button>
                  <DropdownContainer id="pali" className="ahupuaa">
                    <h3>Ahupuaʻa (Land Division)</h3>
                    <button>Hanakapīʻai</button>
                    <button>Hanakoa</button>
                    <button>Pōhakuʻau</button>
                    <button>Kalalau</button>
                    <button>Honopū</button>
                    <button>Awaawapuhi</button>
                  </DropdownContainer>
                <button onClick={() => {this.setBoxName("kona"); this.showNav("kona")}}>Kona</button>
                  <DropdownContainer id="kona" className="ahupuaa">
                    <h3>Ahupuaʻa (Land Division)</h3>
                    <button>Nuʻalolo</button>
                    <button>Miloliʻi</button>
                    <button>Mānā</button>
                    <button>Pōkiʻikauna</button>
                    <button>Makaha</button>
                    <button>Kauhao</button>
                    <button>Kaʻaweiki</button>
                    <button>Hikimoe</button>
                    <button>Haʻeleʻele</button>
                    <button>Kauwila</button>
                    <button>Kolo</button>
                    <button>Kahelunui</button>
                    <button>Nonomahiki</button>
                    <button>Kawaʻaloa</button>
                    <button>ʻOpelu</button>
                    <button>Waiawa</button>
                    <button>Kekaha</button>
                    <button>Kapena</button>
                    <button>Waimea</button>
                    <button>Makaweli</button>
                    <button>Kupua</button>
                    <button>Hanapēpē</button>
                    <button>Wāhiawā</button>
                    <button>Kalāheo</button>
                    <button>Lāwaʻi</button>
                    <button>Apeo</button>
                    <button>Kōloa</button>
                    <button>Weliweli</button>
                    <button>Pāʻā</button>
                    <button>Māhāʻulepū</button>
                  </DropdownContainer>               
              </DropdownContainer>
            <button onClick={() => {this.setBoxName("oahu"); this.showNav("oahu")}}>Oʻahu</button>
              <DropdownContainer id="oahu" className="moku">
                <h3>Moku (District)</h3>
                <button>Koʻolauloa</button>
                <button>Koʻolaupoko</button>
                <button>Kona</button>
                <button>Ewa</button>
                <button>Waianae</button>
                <button>Waialua</button>
              </DropdownContainer>
            <button onClick={() => {this.setBoxName("molokai"); this.showNav("molokai")}}>Molokaʻi</button>
              <DropdownContainer id="molokai" className="moku">
                <h3>Moku (District)</h3>
                <button>Koʻolau</button>
                <button>Halawa</button>
                <button>Kona</button>
                <button>Palaʻau</button>
                <button>Kaluakoʻi</button>
              </DropdownContainer>
            <button onClick={() => {this.setBoxName("lanai"); this.showNav("lanai")}}>Lānaʻi</button>
              <DropdownContainer id="lanai" className="moku">
                <h3>Moku (District)</h3>
                <button>Koʻolau</button>
                <button>Kona</button>
              </DropdownContainer>
            <button onClick={() => {this.setBoxName("kahoolawe"); this.showNav("kahoolawe")}}>Kahoʻolawe</button>
              <DropdownContainer id="kahoolawe" />
            <button onClick={() => {this.setBoxName("maui"); this.showNav("maui")}}>Maui</button>
              <DropdownContainer id="maui" className="moku">
                <h3>Moku (District)</h3>
                <button>Hamakuapoko</button>
                <button>Hamakualoa</button>
                <button>Koʻolau</button>
                <button>Hana</button>
                <button>Kipahulu</button>
                <button>Kaupu</button>
                <button>Kahikinui</button>
                <button>Honuaula</button>
                <button>Kula</button>
                <button>Kealaloloa</button>
                <button>Lahaina</button>
                <button>Kanapali</button>
                <button>Wailuku</button>
              </DropdownContainer>
            <button onClick={() => {this.setBoxName("hawaii"); this.showNav("hawaii")}}>Hawaiʻi</button>
              <DropdownContainer id="hawaii" className="moku">
                <h3>Moku (District)</h3>
                <button>Kohala</button>
                <button>Hāmākua</button>
                <button>Hilo</button>
                <button>Puna</button>
                <button>Kāʻū</button>
                <button>Kona</button>
              </DropdownContainer>
          </DropdownContainer>
        <button><a href="#">Contact Us</a></button>
        </div>
      </div>
    )
  }
}

export default HamburgerMenu;
