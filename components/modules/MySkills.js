import React, { useContext } from 'react';
import Progress from '@elements/Progress';
import { DataContext } from '@context/Context';


function MySkills(props) {
    const {skillsData} = useContext(DataContext);
    console.log(skillsData);
    return (
        <div>
            <h2 className="text-[2rem] my-[30px]">مهارت های من</h2>
            <span className='text-[#79797f]'>برخی از مهارت های حرفه ای من</span>
            {skillsData ? <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                {skillsData.map((skill , index) => (
                        <Progress key={index} title={skill.title} width={skill.width} />
                ))}
            </div> : null}
            
        </div>
    );
}

export default MySkills;