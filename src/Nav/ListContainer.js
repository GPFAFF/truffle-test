import React from 'react';
import List from './List';

import styled from 'styled-components';

const ListContainer = styled.ul `

  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 20px
  margin: 0;
`

const ListContainerElement = props => {
  return (
    <ListContainer>
      <List name='uno'/>
      <List name='dos'/>
      <List name='tres'/>
      <List name='quatro'/>
    </ListContainer>
  )
}

export default ListContainerElement;