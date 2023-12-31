import Button from "@elements/Button";
import Title from "@elements/Title";
import { DataContext } from "context/Context";
import { useContext } from "react";

function AboutSec(props) {
    const {data} = useContext(DataContext)
    return (
        <div>
           <Title title='درباره من' />
            <h2 className="text-[2rem] my-[30px]">{data.fullName}</h2>
            <p className="text-justify">{data.descriptions}</p>
            {/* <p className="my-[20px] text-justify">جهت تایید صحت مدارک اینجانب میتوانید از طریق این لینک اقدام کنید و Transcript ID: 1240569و Access Code: 12345678 را وارد کنید</p> */}
            <div className='flex my-[30px]'>
                <div>

                <Button title='ارتباط با من' href='/contact-me' />
                </div>
                <div className='mr-[30px]'>

                <Button title='نمونه کارها' href='/simples' />
                </div>
            </div>
            <hr className='bg-silver my-[50px]'></hr>
           </div>
    );
}

export default AboutSec;