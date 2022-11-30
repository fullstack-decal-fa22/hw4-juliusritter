import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [list, setList] = useState([]);
    /* Use the map() function to render multiple Blocks! */
    const posts = list.map((color) => <Block color={color} caption={color}></Block>);

    const update = (color) => {
        setList(posts => [color, ...posts]);

    }

    return (
        <div>
            <Menu click={update}></Menu>
            {/*Below is where all of your Blocks should render!*/}
            {posts}
        </div>
    );
}
