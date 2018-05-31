import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav';
import Button from './Button';
import VideoComponent from './Video';
import TestData from './test-data.json'
import './App.css';

import styled from 'styled-components'


const Container = styled.div `
  padding: 40px;
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

    console.log(TestData);

    // const response = await fetch('http://tm-kitchen-api-alpha.herokuapp.com/videos?api_key=homework&auth_token=1&limit=10&workflow_status=ready')
    // .then(res => res.json());

    // const response = fetch(JSON)
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    const chunks = TestData.map(chunk => chunk);

    this.setState({
      videoData: chunks,
    });
  }

//   .filter((i, index) => (index < 3))
//              .map((i, index) => {
//                    return (
//                      <myview item={i} key={i.id} />
//                    );
//               });


  render() {

    return (
      <div className="App">
        <Nav />
        <Container>
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
        </Container>
      </div>
    );
  }
}

export default App;
