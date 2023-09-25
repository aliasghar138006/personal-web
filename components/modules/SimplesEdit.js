import Dashboardbtn from 'components/elements/Dashboardbtn';
import EditInput from 'components/elements/EditInput';
import Cancell from 'public/icons/Cancell';
import React from 'react';

function SimplesEdit({form , setForm}) {
    const SimplesHandler = (e , index) => {
        const {simples} = form;
        const {name , value} = e.target;
        const newSimples = [...simples];
        newSimples[index][name] = value; 
        setForm({ ...form, simples:newSimples });
        console.log(form.simples);
      };
    
      
    
      const addSimplesHandler = () => {
        const {simples} = form;
        setForm({...form , simples:[...simples , {title:'' , university:'' , year:''}]});
      }
    
      
    
      const cancelSimplesHandler = (index) => {
        const {simples} = form;
        const newSimples = [...simples];
        newSimples.splice(index , 1);
        setForm({...form , simples:newSimples})
      }
    return (
        <div className="w-[80%] mt-[10px] py-[30px] mx-auto rounded-xl  border-2 border-green-800">
        <h2 className="text-[1.3rem] text-center">نمونه کارها</h2>
          {form.simples.map((item, index) => (
           <div className="relative" key={index}>
            <EditInput label='عنوان' placeholder="تعمیر موتور" value={item.title} onChange={(e) => SimplesHandler(e , index)} name='title'/>
            <EditInput label='لینک تصویر نمونه کار' placeholder="" value={item.image} onChange={(e) => SimplesHandler(e , index)} name='image'/>
            <EditInput label='لینک تایید نمونه کار' placeholder="می توانید این فیلد را خالی بگذارید" value={item.url} onChange={(e) => SimplesHandler(e , index)} name='url'/>
            <div onClick={() => cancelSimplesHandler(index)} className="absolute cursor-pointer -top-[10px] right-[10px] w-[30px] h-[30px] text-red-700">
              <Cancell />
            </div>
            <hr></hr>
           </div>
          ))}
          <Dashboardbtn title='افزودن مورد جدید' onClick={addSimplesHandler} />
        </div>
    );
}

export default SimplesEdit;