import React from 'react';
import Card from './Card';
import AddNew from './AddNew';

function List(props) {
    return (
        <div>
            <h1>List</h1>
            <Card/>
            <AddNew/>
        </div>
    );
}

export default List;