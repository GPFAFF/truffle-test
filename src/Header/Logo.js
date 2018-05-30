import React, { Component } from 'react';
import logo from '../logo.svg';

import styled from 'styled-components'

const MainLogo = styled.img `
  animation: pulse infinite 2s;
  height: 80px;
`

class Logo extends Component {
  render() {
    return (
      <MainLogo src={logo} className="App-logo" alt="logo" />
    )
  }
}

export default Logo;



