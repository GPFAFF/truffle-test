import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
// import slug from 'slugify';

import styled from 'styled-components';

class Results extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }

  render() {

    // console.log(this.props.data);

    const {
      title,
      description
    } = this.props.data;

    return (
      <div className="cards">
        <h2>{title}</h2>
        <h3>{description}</h3>
        {/* <Link to={`/talks/${id}/${slug(name)}`}>
          <h2 className="card_title">{name}</h2>
          <img className="card_image" src={picture} alt={`Label of ${name}`} />
        </Link> */}
      </div>
    );
  }
}

export default Results;

