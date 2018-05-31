import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';

import styled from 'styled-components';

const VideoContainer = styled.div `
  margin: 0 auto;
`

class VideoComponent extends Component {

  static propTypes = {
    videoData: PropTypes.array.isRequired,
  }

  render() {

    return (
      <VideoContainer className='video'>
        {this.props.videoData.map(
          details => <Results key={details.id} data={details} />
        )}
      </VideoContainer>
    )
  }
}

export default VideoComponent;



