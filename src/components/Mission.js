import React from 'react';
import PropTypes from 'prop-types';

function Mission({ ...props }) {
  const { mission_id, mission_name, description } = props;
  return (
    <div />
  );
}

export default Mission;

Mission.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string,
  description: PropTypes.string
};
Mission.defaultProps = {
  mission_name: '',
  description: ''
};
