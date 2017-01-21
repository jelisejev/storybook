import React from 'react';

import './Name.scss';

const Name = (props) => (
  <div className={'name ' + (props.type ? props.type : '')}>{props.name}</div>
)

export default Name;