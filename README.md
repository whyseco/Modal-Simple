## Modal-Simple

This is a simple quick and customizable modal component that you can use in your App.
The modal is based on bootstrap. 

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

| Name           | Type         | Default  | Description                  |
|:-------------:|:-------------:|:--------:|:----------------------------:|
| show          | boolean       | false    | When true the modal will<br>show itself. |
| onHide        | function      |          | A callback fired when the<br>header closeButton or <br>non-static backdrop is <br>clicked. Required if either<br> specified.   |
| title         | object        | text: string <br>className: string | Specify the header<br> title and className.|
| closeBtn | object | show : Boolean <br>className : string | Specify if you need the <br> close button appear <br>and apply a class. |
| className | object | modal: string<br>header: string<br>body: string<br>footer: string<br>|Add a className to each<br> part to be able to <br>custom them.|
| footer | boolean | true | if you don't want<br> the block footer appear<br> set it to false.|
| open | object | text: string <br>className: string<br>variant: string | You can custom the provide<br> button by your own text<br> and style. |

 **Modal.Footer**

| Name          | Type          | Default  | Description                  |
|:-------------:|:-------------:|:--------:|:----------------------------: |
| validate| object|text: string<br> action: function<br>className:string<br>variant:string|You can custom the provide<br> button by your own text<br> and style.|
|cancel|object|text: string<br> action: function<br>className:string<br>variant:string|You can custom the provide<br> button by your own text<br> and style.|
