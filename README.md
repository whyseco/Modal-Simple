## Modal-Simple

This is a simple App to have a quick and customisable modal

## Exemples

1.  **Simple use**

    `<Modal title={{ text: "title" }} bodyText="something" />`

![exempl-1](https://raw.githubusercontent.com/veensy/Modal-Simple/master/public/images/modal-1.png)

2.  **Simple Custom**


        `<Modal
    	    open={{ text:  "Open me", className:  "open", variant:  "secondary" }}
    		title={{ text:  "title" }}
    		closeBtn={{ show:  false }}
    	>
    	<strong>test 2</strong>
    	<Modal.Footer
    		validate={{
    			text:  "Validate",
    			variant:  "primary"
    			}}
    	/>
    </Modal>`

![exemple-2](https://raw.githubusercontent.com/veensy/Modal-Simple/master/public/images/modal-2.png)

3.  **Hard custom**

`<Modal
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
</Modal>`
![exemple-3](https://raw.githubusercontent.com/veensy/Modal-Simple/master/public/images/modal-3.png)
