import React from 'react';

function Card({cardInfo}) {
    return (
        <div className='bg-white p-2 mt-2 shadow-xl rounded-md'>
           {cardInfo.title}
        </div>
    );
}

export default Card;