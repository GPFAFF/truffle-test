import React from 'react';

import styled from 'styled-components'

const Title = styled.h1 `
  color: #333;
`

// const title = this.props;

const TitleComponent = props => {
  return (
    <Title>{props.title}</Title>
  )
}


export default TitleComponent;
