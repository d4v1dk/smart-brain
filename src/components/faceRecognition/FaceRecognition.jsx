import React from 'react';

const FaceRecognition = (props) => {
    console.log(props);
    return (
        <div className='center pa3'>
            <div className='absolute mt2'>
                <img src={props.imageUrl} alt='' width='500px' height='auto' />
            </div>
        </div>
    );
}

export default FaceRecognition;