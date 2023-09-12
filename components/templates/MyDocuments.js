import Title from '@elements/Title';
import MyDoc from '@modules/MyDoc';
import { DataContext } from '@context/Context';
import React, { useContext, useState } from 'react';

function MyDocuments(props) {
    const {documentsData} = useContext(DataContext)
    return (
        <div className="my-[100px] w-[80%] mx-auto text-white">
            <Title title='مدارک من' />
            {documentsData.map(item => (
                <MyDoc key={item.id} title={item.title} image={item.image} url={item.url} />
            ))}
        </div>
    );
}

export default MyDocuments;