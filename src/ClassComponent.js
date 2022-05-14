import React, {Component} from "react";
export default class ClassComponent extends Component{
    render(){
        return(
            <div className='container' id="component">
                <h1>This is created using ClassComponent</h1>
                <p>This is done using External Css</p>
                <p style={{color:'black'}}>This is done using Internal Css</p>
                
            </div>
        )
    
    }
}