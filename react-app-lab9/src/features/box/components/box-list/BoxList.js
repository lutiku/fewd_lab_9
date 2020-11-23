import React, { Component } from 'react' ;
import BoxElement from "./BoxElement/BoxElement";



export default class BoxList extends Component{
    render(){
        return(
            <div className="container d-flex flex-wrap justify-content-center pb-5">

                       <BoxElement/>
            </div>
        )
    }
}
