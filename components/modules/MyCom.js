import React from 'react';
import { useState } from 'react';
import SearchBtn from 'components/elements/SearchBtn';
function MyCom({image , url}) {
    const [show , setShow] = useState(false);
    return (
        <div className='inline-grid mr-[10px] relative mt-[30px]' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <img src={image} width='400px' height='200px' alt='com' />
            {show ?
                <div className='absolute bottom-2 left-2'>
                    <SearchBtn url={url} />
                </div>
                :
                null
            }
        </div>
    );
}

export default MyCom;