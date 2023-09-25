import Title from 'components/elements/Title';
import Course from 'components/modules/Course';
import { DataContext } from 'context/Context';
import React, { useContext } from 'react';

function MyCourses(props) {
    const {coursesData} = useContext(DataContext)
    return (
        <div className="my-[100px] w-[80%] mx-auto text-white">
            <Title title='برخی از دوره های من' />
            
                {coursesData && coursesData.map(course => (
                    <Course key={course.id} image={course.image} url={course.url} />
                ))}
           
        </div>
    );
}

export default MyCourses;