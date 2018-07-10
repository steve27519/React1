import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Image from "./components/Image";
import Img from "./components/Img.json"
//image imports 

import bart from "./images/bart.jpg";
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

  pickImg = (name) => {
    console.log("Clicked");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
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

  imgSwitch = (name) => {
    switch (name) {
      case "apu":
        return "${apu}"
      case "bart":
        return "${bart}"
      case "beavis":
        return "${beavis}"
      case "hank":
        return "${hank}"
      case "krusty":
        return "${krusty}"
      case "lisa":
        return "${lisa}"
      case "lois":
        return "${lois}"
      case "mrburns":
        return "${mrburns}"
      case "ned":
        return "${ned}"
      case "peggy":
        return "${peggy}"
      case "peter":
        return "${peter}"
      case "butthead":
        return "${butthead}"
      default:
        return "${apu}"
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
        <img src={bart}/> 
          {this.shuffleArray(Img).map(image => (
            <Image url={bart} name={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        
              </div>
    );
  }
}

export default App;
