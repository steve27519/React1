import React from 'react';

const Image = (props) => 
<div>
  <p> {props.url}</p>
  <img src={props.url} alt={props.name} className="img-thumbnail clickable-images" onClick={() => props.pickImg(props.name)} />
</div>

export default Image;