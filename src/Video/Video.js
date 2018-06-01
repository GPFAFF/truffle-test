import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Video = styled.video `
  width: 100%;
  background-size: cover;
  height: auto;
`

class VideoElementComponent extends Component {

  static propTypes = {
    webm: PropTypes.string,
  }

  render() {

    const {
      webm,
    } = this.props.data;

    return (
      <Video controls src={webm}></Video>
    )
  }
}



export default VideoElementComponent;