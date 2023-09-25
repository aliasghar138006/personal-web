import React, { useContext } from 'react';
import Title from '@elements/Title';
import Exprience from '@elements/Exprience';
import { DataContext } from '@context/Context';


function MyExprience(props) {
    const {exprienceData} = useContext(DataContext);
    console.log(exprienceData);
    return (
        <div>
            <Title title='تجربه ها' />
            {exprienceData && exprienceData.map(item => (
                <Exprience key={item.id} title={item.title} descriptions={item.descriptions} startYear={item.startYear} endYear={item.endYear} icon={item.icon} />
            ))}
        </div>
    );
}

export default MyExprience;