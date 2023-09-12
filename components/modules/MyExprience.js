import React, { useContext } from 'react';
import Title from '@elements/Title';
import Exprience from '@elements/Exprience';
import { DataContext } from '@context/Context';


function MyExprience(props) {
    const {exprienceData} = useContext(DataContext)
    return (
        <div>
            <Title title='تجربه ها' />
            {exprienceData.map(item => (
                <Exprience key={item.id} title={item.title} descriptions={item.descriptions} startDate={item.startDate} endDate={item.endDate} icon={item.icon} />
            ))}
        </div>
    );
}

export default MyExprience;