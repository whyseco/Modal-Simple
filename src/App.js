import React from "react";
import Modal from "./Modal/Modal";
import logo from "./logo.svg";
import "./App.scss";

class App extends React.Component {
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
          title={{ text: "title", className: "title" }}
          closeBtn={{ show: true, className: "btn-close" }}
          className={{
            modal: "modal-block-App",
            header: "header-block",
            body: "body-block",
            footer: "footer-block"
          }}
        >
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

export default App;
