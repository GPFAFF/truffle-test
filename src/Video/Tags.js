import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    color: #333;
    background-color: white;
    box-shadow: 2px 2px 2px #333;
  }
`
class TagElementComponent extends Component {

  static propTypes = {
    tags: PropTypes.string,
  }

  render() {

    const {
      tags,
    } = this.props.data;

    return (
      <TagElement>{this.props.data}</TagElement>
    )
  }
}



export default TagElementComponent;