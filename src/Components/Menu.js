import React, { useState } from 'react';
import Color from "./Color"
import Block from "./Color"
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
        <Color color="red" handleClick={props.click}></Color>
        <Color color="blue" handleClick={props.click}></Color>
        <Color color="yellow" handleClick={props.click}></Color>
        <Color color="Green" handleClick={props.click}></Color>
      </div>
    );
}









export default Menu;
