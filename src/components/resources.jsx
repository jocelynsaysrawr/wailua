import React, { Component } from "react";
import { authenticate, signout } from "../actions/index";
import { Auth } from "aws-amplify";
import requireAuth from "../components/require_auth";
import { connect } from "react-redux";
import "../style/resources.scss";

class Resources extends Component {
  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.props.authenticate(true);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
  }
  render() {
    return (
      <div className="resources-container">
        <button className="btn-signout" onClick={this.props.signout}>
          Sign Out
        </button>
        <h1>Resources:</h1>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/1871_Krull+Wailua+Estate+Kauai.pdf"
            >
              1871 Krull Wailua Estate, Kauai
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Akina_2011_Wailua+Hawaiian+Performance+Cartography.pdf"
            />
            Akina 2001 Wailua Hawaiian Performace Cartography
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/DAGS_Metcalf_1849_Part+of+Wailua_Reg145.pdf"
            >
              DAGS Metcalf 1849 Part of Wailua Reg145
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Griffin_2012_Lihue+Place+Name+of+Kauai-Koamalu.pdf"
            >
              Griffin 2012 Lihue Place Name of Kauai-Koamalu
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Hawaii+State+Archives+Manuscript+Collection.pdf"
            >
              Hawaii State Archives Manuscript Collection
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Hoomanawanui_2012_Hanohano+Wailua.pdf"
            >
              Hoomanawanui 2012 Hanohano Wailua
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kekahuna+%26+Kelsey+M-445_Folder+3.pdf"
            >
              Kekahuna & Kelsey M-445 Folder 3
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kekahuna+%26+Kelsey+M-445_Folder+50.pdf"
            >
              Kekahuna & Kelsey M-445 Folder 50
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kekahuna+%26+Kelsey+M-445_Folder+64.pdf"
            >
              Kekahuna & Kelsey M-445 Folder 64
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kekahuna+%26+Kelsey+M-445_Folder+69.pdf"
            >
              Kekahuna & Kelsey M-445 Folder 69
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kekahuna+%26+Kelsey+M-445_Folder+76.pdf"
            >
              Kekahuna & Kelsey M-445 Folder 76
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+215.pdf"
            />
            Kelsey M-86 Folder 215
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+216.pdf"
            >
              Kelsey M-86 Folder 216
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+217.pdf"
            >
              Kelsey M-86 Folder 217
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+218+(1).pdf"
            >
              Kelsey M-86 Folder 218
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+226.pdf"
            >
              Kelsey M-86 Folder 226
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+484.pdf"
            >
              Kelsey M-86 Folder 484
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+485.pdf"
            >
              Kelsey M-86 Folder 485
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+491.pdf"
            >
              Kelsey M-86 Folder 491
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Kelsey+M-86_Folder+86.pdf"
            >
              Kelsey M-86 Folder 86
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Soboleski+2006_Island+History+PDF.pdf"
            >
              Soboleski 2006 Island History
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/Statewide+County+HI+Archives+Biographies-+Cecil+Brown.pdf"
            >
              Statewide County HI Archives Biographies - Cecil Brown
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://s3-us-west-2.amazonaws.com/wailua-api-references/The_Garden_Island_Tue__Feb_11__1919_+-Mo'olelo.pdf"
            >
              The Garden Island Tuesday, February 11, 1919 - Mo'olelo
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(
  mapStateToProps,
  { authenticate, signout }
)(requireAuth(Resources));
