import React, { Component } from 'react' ;

import CreationElement from "./CreationElement/CreationElement";

 class Infos extends Component{
     constructor(props) {
         super(props);
         this.state = [
             {name: "Test" },

             ]
     }
 }



export default class CreationList extends Component{
    render(){
        return(


            <div className="container">



                        <CreationElement {...this.props}/>


            </div>

        )
    }
}
