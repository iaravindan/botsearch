import React from 'react';

const Card=({username,email,id})=>
{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
            <img alt='Cricket Pic' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h1>{username}</h1>
                <p1>{email}</p1>
            </div>
        </div>
    );
}

export default Card;