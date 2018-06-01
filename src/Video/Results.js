import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagElementComponent from './Tags';
import VideoElementComponent from './Video';

// import { Link } from 'react-router-dom';
// import slug from 'slugify';

import styled from 'styled-components';

const TagContainer = styled.div `
  margin: 0 auto;
  width: 500px;
`

const Cards = styled.div `
  text-align: left;
`

class Results extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    associated_video_assets: PropTypes.object,
    square_asset_video_asset: PropTypes.object,
  }

  renderVideo = (associated_video_assets, square_asset_video_asset) => {
    if (associated_video_assets == null) return;
    const mergedObject = {...associated_video_assets, ...square_asset_video_asset};
    const videos = mergedObject[0].video_asset;
    return (
      <div className='videos'>
        <VideoElementComponent data={videos} />
      </div>
    )
  }


  renderTags = (tags) => {
    if (tags == null) return;
    return (
      <TagContainer>
        {tags.map((tag, index) =>
          <TagElementComponent key={index} data={tag} />
        )}
      </TagContainer>
    )
  }

  render() {

    const {
      title,
      description,
      associated_video_assets,
      tags,
    } = this.props.data;

    return (
      <Cards>
        <h2>{title}</h2>
        <h3>{description}</h3>
        {this.renderVideo(associated_video_assets)}
        {this.renderTags(tags)}
      </Cards>
    );
  }
}

export default Results;

