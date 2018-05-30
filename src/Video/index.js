import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';

import styled from 'styled-components';

class VideoComponent extends Component {
  static propTypes = {
    videoData: PropTypes.array.isRequired,
  }

  render() {

    return (
      <div className="video-container">
        {this.props.videoData.map(
          details => <Results key={details.id} data={details} />
        )}
      </div>
    )
  }
}

export default VideoComponent;



