import React, { useContext } from 'react';
import Progress from '@elements/Progress';
import { DataContext } from '@context/Context';


function MySkills(props) {
    const {skillsData} = useContext(DataContext)
    return (
        <div>
            <h2 className="text-[2rem] my-[30px]">مهارت های من</h2>
            <span className='text-[#79797f]'>برخی از مهارت های حرفه ای من</span>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                {skillsData.map(skill => (
                        <Progress key={skill.id} title={skill.title} width={skill.width} />
                ))}
            </div>
            
        </div>
    );
}

export default MySkills;