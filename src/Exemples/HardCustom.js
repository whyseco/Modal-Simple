import React from "react";
import Modal from "../Modal";
import logo from "./logo.svg";
import "./HardCustom.scss";

class HardCustom extends React.Component {
  state = { show: false };
  modalState = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <button className="open" onClick={this.modalState}>
          OPEN
        </button>
        <Modal
          show={this.state.show}
          onHide={this.modalState}
          closeBtn={{ show: true, className: "btn-close" }}
          className={{
            modal: "modal-block-hard-custom",
            header: "header-block",
            body: "body-block",
            footer: "footer-block"
          }}
        >
          <Modal.Header>
          <h1 className='title'>Hard Custom</h1>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-row body-block">
              <img src={logo} alt="logo" />
              <img src={logo} alt="logo" />
              test
            </div>
          </Modal.Body>
          <Modal.Footer
            validate={{
              text: "Validate",
              action: this.modalState,
              className: "btn-valid"
            }}
            cancel={{
              text: "Close",
              action: this.modalState,
              className: "btn-cancel"
            }}
          />
        </Modal>
      </div>
    );
  }
}

export default HardCustom;
