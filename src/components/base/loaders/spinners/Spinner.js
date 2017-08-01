import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import spinnerPath from '../../../../../public/images/spinner.svg';

const frames = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Animated = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-image: url(${spinnerPath});
  animation: ${frames} 1.4s linear infinite;
`;

export default function Spinner({ size = 50, ...props }) {
  return <Animated size={size} {...props} />;
}

Spinner.propTypes = {
  /**
   * The size (in pixels) of the spinner's height and width
   */
  size: PropTypes.number
};
