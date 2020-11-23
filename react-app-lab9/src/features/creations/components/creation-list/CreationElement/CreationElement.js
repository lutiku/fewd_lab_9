import React, { Component } from 'react' ;



export default class CreationElement extends Component{
    constructor(props) {
        super(props);
        this.state = [
            {
                title: "Yummmmmmm",
                src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
            },
            {
                title: "Hey Guys!  Wait Up!",
                src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
            },
            {
                title: "Yikes",
                src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
            }
        ];
    }
    render() {
        return(


        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical ">
                            <figure className="image is-4by3">
                                <img src="https://images.unsplash.com/photo-1583353858816-0b5850f04adf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxNnx4SHhZVE1ITGdPY3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                            </figure>
                    </div>

                    <div className="tile is-parent is-vertical">
                        <figure className="image is-4by3">
                            <img src="https://images.unsplash.com/photo-1575653201009-1d9552cbc12e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwN3x4SHhZVE1ITGdPY3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                        </figure>
                    </div>
                </div>

                <div className="tile is-parent is-vertical">
                    <figure className="image is-4by3">
                        <img src="https://images.unsplash.com/photo-1606065258119-27297317b812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                    </figure>

                </div>
            </div>

            <div className="tile is-parent is-vertical">
                <figure className="image is-4by3">
                    <img src="https://images.unsplash.com/photo-1602566518418-7269dae8cde4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfHhIeFlUTUhMZ09jfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"/>
                </figure>
                <figure className="image is-4by3">
                    <img src="https://images.unsplash.com/photo-1536424868245-13b715e11e71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </figure>
                <figure className="image is-4by3">
                    <img src="https://images.unsplash.com/photo-1606044466411-207a9a49711f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
                </figure>
            </div>
        </div>





              )
    }

}
