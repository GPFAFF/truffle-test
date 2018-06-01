import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav';
import VideoComponent from './Video';
import TestData from './test-data.json'
import './App.css';

import styled from 'styled-components'


const Container = styled.div `
  padding: 40px 0;
`

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

    // const response = await fetch('http://tm-kitchen-api-alpha.herokuapp.com/videos?api_key=homework&auth_token=1&limit=10&workflow_status=ready')
    // .then(res => res.json());

    const chunks = TestData.map(chunk => chunk);

    this.setState({
      videoData: chunks,
    });

  }

  render() {

    return (
      <div className="App">
        <Nav />
        <Container>
          <Header />
          <VideoComponent videoData={this.state.videoData} />
        </Container>
      </div>
    );
  }
}

export default App;
