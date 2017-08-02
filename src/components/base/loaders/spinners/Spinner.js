import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const frames = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ArcTrack = styled.path`fill: #eee;`;
const ArcTail = styled.path`fill: url(#linear-gradient);`;
const ArcHead = styled.path`
  fill: ${props => props.color};
`;
const ArcClear = styled.path`fill:none;`;

const Animated = styled.svg`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  animation: ${frames} 1.4s linear infinite;
`;

export default function Spinner({ size = 50, color = '#573866', ...props }) {
  return (
    <Animated size={size} {...props} viewBox="0 0 281.77 281.77">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="168.16"
          y1="97.33"
          x2="309.04"
          y2="97.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.02" stopColor="#eee" />
          <stop offset="0.89" stopColor={color} />
        </linearGradient>
      </defs>
      <ArcTrack
        d="M168.16,26.9A140.88,140.88,0,1,0,309,167.78,140.88,140.88,0,0,0,168.16,26.9Zm0,239.24a98.36,98.36,0,1,1,98.36-98.36A98.36,98.36,0,0,1,168.16,266.14Z"
        transform="translate(-27.28 -26.9)"
      />
      <g className="indicator">
        <ArcTail
          d="M266.52,167.77H309A140.88,140.88,0,0,0,168.16,26.9V69.42A98.36,98.36,0,0,1,266.52,167.77Z"
          transform="translate(-27.28 -26.9)"
        />
        <ArcHead
          color={color}
          d="M266.52,167.57H309c0,77.8-63.08,141.09-140.88,141.09V266.13C222.48,266.13,266.52,221.89,266.52,167.57Z"
          transform="translate(-27.28 -26.9)"
        />
        <ArcClear
          d="M69.8,167.77H27.28A140.88,140.88,0,0,1,168.16,26.9V69.42A98.36,98.36,0,0,0,69.8,167.77Z"
          transform="translate(-27.28 -26.9)"
        />
        <ArcClear
          d="M69.8,167.78H27.28A140.88,140.88,0,0,0,168.16,308.65V266.13A98.36,98.36,0,0,1,69.8,167.78Z"
          transform="translate(-27.28 -26.9)"
        />
      </g>
    </Animated>
  );
}

Spinner.propTypes = {
  /**
   * The size (in pixels) of the spinner's height and width
   */
  size: PropTypes.number,
  /**
   * The spinner's base fill color
   */
  color: PropTypes.string
};
