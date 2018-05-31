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

class Results extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    associated_video_assets: PropTypes.object,
  }

  renderVideo = (associated_video_assets) => {
    if (associated_video_assets == null) return;
    const videoArray = associated_video_assets[0].video_asset;
    console.log(videoArray);
    return (
      <div className='videos'>
        <VideoElementComponent data={videoArray} />
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

    // console.log('AVA', typeof portrait_asset_video_asset)

    return (
      <div className="cards">
        <h2>{title}</h2>
        <h3>{description}</h3>
        {this.renderVideo(associated_video_assets)}
        {this.renderTags(tags)}
        {/* <div className='tags'>
          {tags.map(tag =>
            <TagElementComponent key={tag.id} data={tag} />
          )}
        </div> */}
        {/* <Link to={`/talks/${id}/${slug(name)}`}>
          <h2 className="card_title">{name}</h2>
          <img className="card_image" src={picture} alt={`Label of ${name}`} />
        </Link> */}
      </div>
    );
  }
}

export default Results;

