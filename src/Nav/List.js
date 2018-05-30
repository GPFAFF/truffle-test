import React from 'react';

import styled from 'styled-components';

const ListElement = styled.li `

  color: white;
  transition: .2s ease-out;

  &:hover {
    color: #333;
    cursor: pointer;
    transition: .2s ease-in;
    text-decoration: underline;
  }
`

const ListElementComponent = props => {
  return (
    <ListElement>{props.name}</ListElement>
  )
}

export default ListElementComponent;