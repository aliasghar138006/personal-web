import Dashboardbtn from 'components/elements/Dashboardbtn';
import EditInput from 'components/elements/EditInput';
import Cancell from 'public/icons/Cancell';
import React from 'react';

function EducationsEdit({form , setForm}) {
    const educationsHandler = (e , index) => {
        const {educations} = form;
        const {name , value} = e.target;
        const newEducations = [...educations];
        newEducations[index][name] = value; 
        setForm({ ...form, educations:newEducations });
        console.log(form.educations);
      };
    
      
    
      const addEducationsHandler = () => {
        const {educations} = form;
        setForm({...form , educations:[...educations , {title:'' , university:'' , year:''}]});
      }
    
      
    
      const cancelEducationsHandler = (index) => {
        const {educations} = form;
        const newEducations = [...educations];
        newEducations.splice(index , 1);
        setForm({...form , educations:newEducations})
      }
    return (
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">تحصیلات</h2>
          {form.educations.map((item, index) => (
           <div className="relative" key={index}>
            <EditInput label='عنوان' placeholder="کارشناسی مکانیک" value={item.title} onChange={(e) => educationsHandler(e , index)} name='title'/>
            <EditInput label='محل تحصیل' placeholder="دانشگاه تهران" value={item.university} onChange={(e) => educationsHandler(e , index)} name='university'/>
            <EditInput label='سال فارغ التحصیلی' placeholder="1398" value={item.year} onChange={(e) => educationsHandler(e , index)} name='year'/>
            <div onClick={() => cancelEducationsHandler(index)} className="absolute cursor-pointer -top-[10px] right-[10px] w-[30px] h-[30px] text-red-700">
              <Cancell />
            </div>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addEducationsHandler} />
        </div>
    );
}

export default EducationsEdit;