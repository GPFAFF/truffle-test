import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';

import styled from 'styled-components';

const VideoContainer = styled.div `
  margin: 0 auto;
`
const Button = styled.button `
  border-radius: 3px;
  padding: 16px 24px;
  margin: 40px 16px;
  background: #333;
  width: 180px;
  color: white;
  border: 2px solid #333;
  text-transform: uppercase;
  font-weight: bold;
  transition: .2s ease-out;

  &:hover,
  &:focus {
     background: #555;
     transition: .2s ease-in;
     cursor: pointer;
     outline: none;
     transform: scale(1.1);
  }
`;

class VideoComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      counter: 0,
      videoData: [],
    }
  }

  static propTypes = {
    videoData: PropTypes.array.isRequired,
  }

  //next video function
  nextVideo = () => {
    console.log('next')

    if (this.state.counter < this.props.videoData.length - 1) {
      console.log('next');
      this.setState({
        counter : this.state.counter + 1
      })
    }
  }
  //previous video function
  previousVideo = () => {
    console.log('previous')
    if (this.state.counter > 0) {
      this.setState({
      counter : this.state.counter - 1
      })
    }
  }

  render() {

    console.log(this.props.videoData.length)

    if (this.props.videoData.length === 0) return <h1>Loading...</h1>

    return (
      <VideoContainer className='video'>
        <Results data={this.props.videoData[this.state.counter]} />
          <Button
            onClick={this.previousVideo}
            className='previous_button'
          >
          Previous Video
          </Button>
          <Button
            onClick={this.nextVideo}
            className='next_button'
          >
            Next Video
          </Button>
      </VideoContainer>
    )
  }
}

export default VideoComponent;



