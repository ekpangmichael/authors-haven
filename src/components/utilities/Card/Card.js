import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import robot from '../../../assets/images/avatars/robot.svg';
import Backdrop from '../BackDrop/BackDrop';

/**
 * @description - Card Component
 * @param {object} props
 * @returns {JSX} - Card JSX template
 */
const Card = props => (
  <Fragment>
    <div className="held">
      <div className="card-content">
        <div className="card card__has-shadow">
          { props.imageUrl ? <div className="card--image"
            style={{ backgroundImage: `url(${props.imageUrl})` }}>
            <div className="hero-image">
            </div>
          </div>
            : <Backdrop title={props.title}/> }
        </div>
        <div className="card--footer">
          <Link to={`/article/${props.slug}`}>
            <h4>{ props.title }</h4>
          </Link>
          <Link to={`/article/${props.slug}`}>
            <div>{ props.body }</div>
          </Link>
          <div className="card--info">
            <p className="card--avatar">
              <a href="#">
                <span><img className="circle"
                  src={ props.author.imageUrl || robot }
                  alt="Robot" /></span>
                <span>{props.author.userName}</span>
              </a>
            </p>
            <span className="card--time">
              <p>
                <i data-feather="clock" className="icon"></i>
                { props.readTime === 1
                  ? `${props.readTime} min` : `${props.readTime} mins` }
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.any.isRequired,
  author: PropTypes.object.isRequired,
  readTime: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
