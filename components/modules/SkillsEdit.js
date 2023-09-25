import Dashboardbtn from 'components/elements/Dashboardbtn';
import EditInput from 'components/elements/EditInput';
import Cancell from 'public/icons/Cancell';
import React from 'react';

function SkillsEdit({form , setForm}) {

    const skillsHandler = (e , index) => {
        const {skills} = form;
        const {name , value} = e.target;
        const newSkills = [...skills];
        newSkills[index][name] = value; 
        setForm({ ...form, skills:newSkills });
      };

    const cancelSkillsHandler = (index) => {
        const {skills} = form;
        const newSkills = [...skills];
        newSkills.splice(index , 1);
        setForm({...form , skills:newSkills})
      }

      const addSkillHandler = () => {
        const {skills} = form;
        setForm({...form , skills:[...skills , {title:'' , width:''}]});
        console.log(form.skills);
      }
    return (
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">مهارت ها</h2>
          {form.skills.map((item, index) => (
           <div className="relative" key={index}>
            <EditInput label='عنوان' placeholder="فتوشاپ" value={item.title} onChange={(e) => skillsHandler(e , index)} name='title'/>
            <EditInput label='سطح تسلط' placeholder="80" type="number" value={item.width} onChange={(e) => skillsHandler(e , index)} name='width'/>
            <div onClick={() => cancelSkillsHandler(index)} className="absolute cursor-pointer -top-[10px] right-[10px] w-[30px] h-[30px] text-red-700">
              <Cancell />
            </div>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addSkillHandler} />
        </div>
    );
}

export default SkillsEdit;