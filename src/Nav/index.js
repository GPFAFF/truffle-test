import React, { Component } from 'react';
import ListContainer from './ListContainer';

import styled from 'styled-components';

const NavComponent = styled.nav `
  width: 100%;
  background-color: magenta;
  height: 70px;
`

class Nav extends Component {
  render() {
    return (
      <NavComponent>
        <ListContainer />
      </NavComponent>
    )
  }
}

export default Nav;