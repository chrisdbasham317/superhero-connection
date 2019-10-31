import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      img: ''
    }
  }

  // componentDidMount = async () => {
  //   await fetch('https://www.superherodb.com/pictures2/portraits/10/100/791.jpg')
  //     .then(res => res.json())
  //     .then(data => {
  //       return this.setState({
  //         isLoading: false,
  //         img: data
  //       })
  //     })
  // }

  render() {
    return (
      <img src='https://www.superherodb.com/pictures2/portraits/10/100/791.jpg' />
    )
}
}

export default App;
