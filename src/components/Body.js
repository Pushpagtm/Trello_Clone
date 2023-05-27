import React from 'react';
// import Filter from './Filter';
import List from './List';

function Body(props) {
    return (
        <div className='w-full border p-3'>
            {/* <Filter/> */}
            <div className='flex flex-wrap  gap-3'>
            <List/>
            </div>

        </div>
    );
}

export default Body;