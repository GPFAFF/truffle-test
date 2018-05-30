import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Video = styled.video `
  border: 2px solid magenta;
  width: 100%;
  background-size: cover;
  height: 300px;
`

class VideoElementComponent extends Component {

  static propTypes = {
    url: PropTypes.string,
  }

  render() {

    const {
      url,
    } = this.props.data;

    return (
      <Video src={this.props.data.url}></Video>
    )
  }
}



export default VideoElementComponent;