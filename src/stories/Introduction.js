import React from 'react';
import "./Introduction.scss"

const modal = "https://raw.githubusercontent.com/veensy/Modal-Simple/master/public/images/modal-1.png"
const github ="https://github.com/veensy/Modal-Simple"
const codesandbox ="wait"
function Introduction(){
    return(
        <div className="started">
            <div className="welcome">
                <h1 className="title">Welcome to Modal-Simple</h1>
                <h4 className="description">This is a simple quick and customizable modal component that you can use in your App. The modal is based on bootstrap.</h4>
            </div>
            <div className="introduction paragraph">
                <h2 className="sub-title">Introduction</h2>
                <div className="content">   
                    <h3 className="link">
                        <a href={github} target="_blank">Source</a>{" "}|{" "}<a href={codesandbox} target="_blank">Demo</a>
                    </h3>
                    <img className="exemple-img" src={modal} alt="exemple modal"/><br/>
                </div>
            </div>
            <div className="installation paragraph">
                <h2 className="sub-title">Installation</h2>
                <div className="content">  
                    
                        <h4>Install with npm or yarn : </h4>
                            
                        <code> npm i modal-simple react-bootstrap bootstrap</code><br/> 
                        or<br/>
                        <code> yarn add modal-simple react-bootstrap bootstrap</code>

                    
                </div>
            </div>
        </div>

    ) 
}
export default Introduction