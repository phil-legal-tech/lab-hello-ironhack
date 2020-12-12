import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (

            <div className="Mother">

                <div className="Child-1">
                    <img src="./images/ironhack-logo.svg"></img>
                    <img className="Menu" src="./images/menu-top.svg"></img>
                    <div className="App">
                        <h1> Say hello to RejactJS </h1>
                        <article>
                            You will learn how to use the most popular frondend library,
                            and become a super Ninja developer.
                        </article>
                        <p>
                            <button className="Button"> Awasome!</button>
                        </p>
                    </div>
                </div>
                <div className="Child">
                    <img className="Logos" src="./images/icon1.png"></img>
                    <img className="Logos" src="./images/icon2.png"></img>
                    <img className="Logos" src="./images/icon3.png"></img>
                    <img className="Logos" src="./images/icon4.png"></img>
                </div>

            </div>

        );
    }
}

export default App;
