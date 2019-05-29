## Modal-Simple

This is a simple App to have a quick and customisable modal

## Exemples

1.  **Simple use**


    ```javascript
    <Modal title={{ text: "title" }} bodyText="something" />
    ```

![exempl-1](https://raw.githubusercontent.com/veensy/Modal-Simple/master/public/images/modal-1.png)

2.  **Simple Custom**

    ```javascript
    <Modal
        open = {{
            text: "Open me",
            className: "open",
            variant: "secondary"
            }}
        title = {{ text: "title" }}
        closeBtn = {{ show: false }}
    >

    <strong>test 2</strong>

    <Modal.Footer
        validate = {{ text: "Validate", variant: "primary" }}
    />
    </Modal>
    ```

![exemple-2](https://raw.githubusercontent.com/veensy/Modal-Simple/master/public/images/modal-2.png)

3.  **Hard custom**

    ```javascript
    state = { show: false };
    modalState = () => {
    this.setState({ show: !this.state.show });
    };
    render() {
        return (
        <div className="App">
            <button className="open" onClick={this.modalState}>
            "Open"
            </button>
            <Modal
                show = {this.state.show}
                onHide = {this.modalState}
                title = {{ text: "title", className: "title" }}
                closeBtn = {{ show: true, className: "btn-close" }}
                className = {{
                    modal: "modal-block-App",
                    header: "header-block",
                    body: "body-block",  
                    footer: "footer-block"
                }}
            >
                <Modal.Body>
                    <div className="d-flex flex-row body-block">
                        <img src={"logo"} alt="logo"/>  
                        <img src={"logo"} alt="logo"/>
                        test
                    </div>
                </Modal.Body>

                <Modal.Footer
                    validate = {{
                        text: "Validate",  
                        action: this.modalState,
                        className: "btn-valid"
                    }} ,
                    cancel = {{
                        text: "Close",
                        action: this.modalState,  
                        className: "btn-cancel"
                    }}
                />
            </Modal>
        </div>
        )
    }


    ```

![exemple-3](https://raw.githubusercontent.com/veensy/Modal-Simple/master/public/images/modal-3.png)

## API

 **Modal**

| Name          | Type          | Default  | Description                |
| ------------- |:-------------:|:--------:|---------------------------:|
| show          | boolean       | false    | When true the modal will   |
                                             show itself                
|onHide         | function      |          | A callback fired when the  |
|               |               |          | header closeButton or      |
|               |               |          | non-static backdrop is     |
|               |               |          | clicked. Required if either|
|               |               |          | specified.                 |
|               |               |          |                            |
