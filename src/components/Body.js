import React from 'react';
import Filter from './Filter';
import List from './List';

function Body(props) {
    return (
        <div>
            <Filter/>
            <List/>
        </div>
    );
}

export default Body;