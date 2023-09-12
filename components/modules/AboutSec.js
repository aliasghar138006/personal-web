import Button from "@elements/Button";
import Title from "@elements/Title";

function AboutSec(props) {
    return (
        <div>
           <Title title='درباره من' />
            <h2 className="text-[2rem] my-[30px]">علی اصغر شحنه</h2>
            <p className="text-justify">برنامه نویس مورد تایید مایکروسافت ، دارای مدارک MCSA ، MCSD و MCT از این کمپانی، مشاور و مدیر پروژه ، مدرس دوره های برنامه نویسی</p>
            <p className="my-[20px] text-justify">جهت تایید صحت مدارک اینجانب میتوانید از طریق این لینک اقدام کنید و Transcript ID: 1240569و Access Code: 12345678 را وارد کنید</p>
            <div className='flex my-[30px]'>
                <div>

                <Button title='ارتباط با من' href='/contact' />
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