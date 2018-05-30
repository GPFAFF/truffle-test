import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagElementComponent from './Tags';
import VideoElementComponent from './Video';

import { Link } from 'react-router-dom';
// import slug from 'slugify';

import styled from 'styled-components';

class Results extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    portrait_asset_video_asset: PropTypes.object,
  }

  renderVideo = (portrait_asset_video_asset) => {
    if (portrait_asset_video_asset == null) return;
    const videoArray = portrait_asset_video_asset.mp4_renditions[3];
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
      <div className='tags'>
        {tags.map((tag, index) =>
          <TagElementComponent key={index} data={tag} />
        )}
      </div>
    )
  }

  render() {

    const {
      title,
      description,
      portrait_asset_video_asset,
      tags,
    } = this.props.data;

    // console.log('AVA', typeof portrait_asset_video_asset)

    return (
      <div className="cards">
        <h2>{title}</h2>
        <h3>{description}</h3>
        {this.renderVideo(portrait_asset_video_asset)}
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

