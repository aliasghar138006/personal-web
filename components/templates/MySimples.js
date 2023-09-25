import Title from 'components/elements/Title';
import Simple from 'components/modules/Simple';
import { DataContext } from 'context/Context';
import React, { useContext } from 'react';

function MySimples(props) {
    const {simplesData} = useContext(DataContext);
    return (
        <div className="my-[100px] w-[80%] mx-auto text-white">
            <Title title='نمونه کارهای من' />
            {simplesData && simplesData.map(simple => (
                <Simple key={simple.id} title={simple.title} image={simple.image} url={simple.url} />
            ))}
        </div>
    );
}

export default MySimples;