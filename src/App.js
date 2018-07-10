import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
//image imports (since I'm not using a server)
import apu from "./images/apu.jpg"
import bart from "./images/bart.jpg"
import beavis from "./images/beavis.jpg"
import butthead from "./images/butthead.jpg"
import hank from "./images/hank.jpg"
import krusty from "./images/krusty.jpg"
import lisa from "./images/lisa.jpg"
import lois from "./images/lois.jpg"
import mrBurns from "./images/mrBurns.jpg"
import ned from "./images/ned.jpg"
import peggy from "./images/peggy.jpg"
import peter from "./images/peter.jpg"
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
        message: "Execellent!" 
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
        return `${apu}`
      case "bart":
        return `${bart}`
      case "beavis":
        return `${beavis}`
      case "hank":
        return `${hank}`
      case "krusty":
        return `${krusty}`
      case "lisa":
        return `${lisa}`
      case "lois":
        return `${lois}`
      case "mrburns":
        return `${mrburns}`
      case "ned":
        return `${ned}`
      case "peggy":
        return `${peggy}`
      case "peter":
        return `${peter}`
      case "butthead":
        return `${butthead}`
      default:
        return `${apu}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
