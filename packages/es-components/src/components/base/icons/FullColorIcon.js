import React from 'react';
import PropTypes from 'prop-types';

export default function FullColorIcon({ name, size, ...props }) {
  return (
    <div
      css={{
        alignItems: 'center',
        display: 'flex',
        height: size,
        justifyContent: 'center',
        width: size
      }}
      {...props}
    >
      <img
        css={{
          height: 'auto',
          maxWidth: '100%'
        }}
        src={`https://bdaim-webexcdn-p.azureedge.net/es-assets/images/full-color-icons/${name}.svg`}
        alt={`${name} icon`}
      />
    </div>
  );
}

FullColorIcon.propTypes = {
  /** Name of the icon to display */
  name: PropTypes.string.isRequired,
  /** Specify icon size in pixels */
  size: PropTypes.number
};

FullColorIcon.defaultProps = {
  size: undefined
};
