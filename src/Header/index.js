import React, { Component } from 'react';
import Logo from './Logo.js';
import Title from './Title.js';

import styled from 'styled-components'


const Header = styled.header `
  display: block;
  text-align: left;
  padding: 40px 0;
`

class HeaderComponent extends Component {

  render() {
    return (
      <Header>
        <Logo />
        <Title title='Truffle Test' />
      </Header>
    );
  }
}

export default HeaderComponent;