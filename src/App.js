import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav';
import Button from './Button';
import VideoComponent from './Video';
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      videoData: [],
    }
  }

  componentDidMount() {
    this.loadDependency();
  }

  loadDependency = async () => {

    const response = await fetch('http://tm-kitchen-api-alpha.herokuapp.com/videos?api_key=homework&auth_token=1&limit=10&workflow_status=ready')
    .then(res => res.json());

    const chunks = response.filter(chunk => chunk);

    this.setState({
      videoData: chunks,
    });
  }


  render() {
    console.log(this.state.videoData[0]);

    return (
      <div className="App">
        <Nav />
        <Header />
        <VideoComponent videoData={this.state.videoData} />
        <Button
          className='next_button'
          name='Next Vid!'
        />
        <Button
          className='previous_button'
          name='Previous Vid!'
        />
      </div>
    );
  }
}

export default App;
