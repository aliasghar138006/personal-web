import Title from '@elements/Title';
import MyDoc from '@modules/MyDoc';
import { DataContext } from '@context/Context';
import React, { useContext, useState } from 'react';
import { Rotate , Zoom } from 'react-awesome-reveal';

function MyDocuments(props) {
    const {documentsData} = useContext(DataContext)
    return (
        <div className="my-[100px] w-[80%] mx-auto text-white">
            <Title title='مدارک من' />
            <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
            {documentsData && documentsData.map(item => (
                <Rotate key={item.id}>

                    <MyDoc title={item.title} image={item.image} url={item.url} />
                </Rotate>
            ))}
            </div>
        </div>
    );
}

export default MyDocuments;