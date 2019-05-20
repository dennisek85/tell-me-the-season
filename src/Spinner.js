import React from 'react';

const Spinner = (props)=> {
  return (
    <div class="ui active inverted dimmer">
      <div class="ui text loader">{props.text}</div>
    </div>
  );
}

Spinner.defaultProps = {
  text: 'Loading...'
};

export default Spinner;