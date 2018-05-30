import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const LinkButton = styled.button `
  border-radius: 3px;
  padding: 16px 24px;
  margin: 1em;
  background: #333;
  width: 180px;
  color: white;
  border: 2px solid #333;
  text-transform: uppercase;
  font-weight: bold;
  transition: .2s ease-out;

  &:hover,
  &:focus {
     background: #555;
     transition: .2s ease-in;
     cursor: pointer;
     outline: none;
     transform: scale(1.1);
  }
`;

const ButtonComponent = props => {
  return (
    <LinkButton
      to={props.details}
      className={props.className}>
      {props.name}
    </LinkButton>
  )
}


export default ButtonComponent;
