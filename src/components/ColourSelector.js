import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={props.className} onClick={() => selectNextBackground({background: background})}>
      {props.label}
    </button>
  )
}
export default ColourSelector;
