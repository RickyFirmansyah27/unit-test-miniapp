import React from 'react';
import PropTypes from 'prop-types';
import "bulma/css/bulma.css";

export const Button = ({ model, label, ...props }) => {
  return (
    <button
      type="button"
      className={['button', `is-${model}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  model: PropTypes.oneOf(['success', 'info', 'danger']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
    model: 'success',
    label:'button',
    onClick: undefined,
};
