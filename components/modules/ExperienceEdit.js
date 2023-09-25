import Dashboardbtn from 'components/elements/Dashboardbtn';
import EditInput from 'components/elements/EditInput';
import Cancell from 'public/icons/Cancell';
import React from 'react';

function ExperienceEdit({form , setForm}) {
    const experienceHandler = (e , index) => {
        const {experience} = form;
        const {name , value} = e.target;
        const newExperience = [...experience];
        newExperience[index][name] = value; 
        setForm({ ...form, experience:newExperience });
        console.log(form.experience);
      };
    
      
    
      const addExperienceHandler = () => {
        const {experience} = form;
        setForm({...form , experience:[...experience , {title:'' , university:'' , year:''}]});
      }
    
      
    
      const cancelExperienceHandler = (index) => {
        const {experience} = form;
        const newExperience = [...experience];
        newExperience.splice(index , 1);
        setForm({...form , experience:newExperience})
      }
    return (
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">تجربیات</h2>
          {form.experience.map((item, index) => (
           <div className="relative" key={index}>
            <EditInput label='عنوان' placeholder="تدریس..." value={item.title} onChange={(e) => experienceHandler(e , index)} name='title'/>
            <EditInput label='توضیحات' placeholder="" value={item.descriptions} onChange={(e) => experienceHandler(e , index)} name='descriptions'/>
            <EditInput label='سال  شروع فعالیت' placeholder="1398" value={item.startYear} onChange={(e) => experienceHandler(e , index)} name='startYear'/>
            <EditInput label='سال  اتمام فعالیت' placeholder="اگر هنوز مشفول انجام این فعالیت هستید این فیلد را خالی بگذارید" value={item.endYear} onChange={(e) => experienceHandler(e , index)} name='endYear'/>
            <EditInput label='لینک آیکون یا تصویر' placeholder="" value={item.icon} onChange={(e) => experienceHandler(e , index)} name='icon'/>

            <div onClick={() => cancelExperienceHandler(index)} className="absolute cursor-pointer -top-[10px] right-[10px] w-[30px] h-[30px] text-red-700">
              <Cancell />
            </div>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addExperienceHandler} />
        </div>
    );
}

export default ExperienceEdit;