import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './back-drop.scss';

const colors = [
  'violet', 'orange',
  'nelson', 'purple',
  'blue'];

/**
 * @description - BackDrop Component - Set a default image
 * for articles with no image
 * @param {object} props
 * @returns {JSX} - A default image
 */
const BackDrop = props => (
  <Fragment>
    <div id="backdrop"
      className={`${colors[Math.floor(Math.random() * colors.length)]}`}>
      <h4>{ props.title }</h4>
    </div>
  </Fragment>
);

BackDrop.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BackDrop;
