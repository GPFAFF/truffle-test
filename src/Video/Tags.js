import React, { Component } from 'react';

import styled from 'styled-components';

const TagElement = styled.div `

  color: white;
  transition: .2s ease-out;
  box-shadow: 2px 2px 2px #333;
  background-color: #333;
  display: inline-flex;
  padding: 10px;
  margin: 10px;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
    transition: 0.2s ease-in;
    color: white;
    background-color: #555;
    box-shadow: 2px 2px 2px #333;
  }
`
class TagElementComponent extends Component {

  render() {

    return (
      <TagElement>{this.props.data}</TagElement>
    )
  }
}



export default TagElementComponent;