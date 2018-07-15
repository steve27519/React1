import React, { Component } from 'react';
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import Main from "./components/Main";
import Image from "./components/image.js";
import Img from "./components/Img.json";
//image imports

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  // random shuffle
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (id) => {
    console.log("Clicked");
    let picked = this.state.picked;
    console.log("picked", picked);
    if (picked.indexOf(id) === -1) {
      console.log("in -1 name", id);
      this.setState({
        picked: picked.concat(id),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Excellent!"
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "You Lost: Try again?",
        correct: 0,
        picked: []
      })
    }
  }

  render() {
    return (
      <div>

        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>

            {this.shuffleArray(Img).map(image => (

            <Image key={image.id} id={image.id} url={image.image} pickImg={this.pickImg}  />
          ))}
        </Main>

              </div>
    );
  }
}
export default App;