import Dashboardbtn from 'components/elements/Dashboardbtn';
import EditInput from 'components/elements/EditInput';
import Cancell from 'public/icons/Cancell';
import React from 'react';

function CommendationsEdit({form , setForm}) {
    const commendationsHandler = (e , index) => {
        const {commendations} = form;
        const {name , value} = e.target;
        const newCommendations = [...commendations];
        newCommendations[index][name] = value; 
        setForm({ ...form, commendations:newCommendations });
        console.log(form.commendations);
      };
    
      
    
      const addCommendationsHandler = () => {
        const {commendations} = form;
        setForm({...form , commendations:[...commendations , {title:'' , university:'' , year:''}]});
      }
    
      
    
      const cancelCommendationsHandler = (index) => {
        const {commendations} = form;
        const newCommendations = [...commendations];
        newCommendations.splice(index , 1);
        setForm({...form , commendations:newCommendations})
      }
    return (
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">تقدیر نامه ها</h2>
          {form.commendations.map((item, index) => (
           <div className="relative" key={index}>
            <EditInput label='لینک تصویر تقدیر نامه' placeholder="" value={item.image} onChange={(e) => commendationsHandler(e , index)} name='image'/>
            <EditInput label='لینک تایید تقدیرنامه' placeholder="می توانید این فیلد را خالی بگذارید" value={item.url} onChange={(e) => commendationsHandler(e , index)} name='url'/>
            <div onClick={() => cancelCommendationsHandler(index)} className="absolute cursor-pointer -top-[10px] right-[10px] w-[30px] h-[30px] text-red-700">
              <Cancell />
            </div>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addCommendationsHandler} />
        </div>
    );
}

export default CommendationsEdit;