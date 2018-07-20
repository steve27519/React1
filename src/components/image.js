import React from 'react';

const Image = (props) =>
  <div className="characterDiv">
    <p> {props.url}</p>
    <img src={props.url} alt="character" className="img-thumbnail clickable-images" onClick={() => props.pickImg(props.id)} />
  </div>

  export default Image;