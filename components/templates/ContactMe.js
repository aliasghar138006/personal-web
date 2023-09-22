import Input from 'components/elements/Input';
import Title from 'components/elements/Title';
import Email from 'public/icons/Email';
import Map from 'public/icons/Map';
import Mobile from 'public/icons/Mobile';
import dynamic from 'next/dynamic';
import { modules , formats } from 'utils/QuilModule';
import Button from 'components/elements/Button';
import { useContext } from 'react';
import { DataContext } from 'context/Context';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})


function ContactMe() {
    const {data} = useContext(DataContext)
    return (
        <div className="my-[100px] w-[80%] mx-auto text-white">
            <Title title='ارتباط با من' />
            <div className='flex max-xl:block'>
            <div className='block mt-[30px] mx-auto bg-[#0b0b13] w-fit max-xl:w-full h-fit p-10'>
                <h2 className='text-[2rem]'>با من در ارتباط باشید</h2>
                <p className='text-[#a3a3a6] mt-[10px]'>از طریق این فرم میتوانید با من در ارتباط باشید</p>
                <p className='text-[#a3a3a6] mt-[10px]'>پاسخ شما از طریق ایمیل برایتان ارسال خواهد شد</p>
                <div className='flex mt-[30px] items-center'>
                    <div className='w-[20px] h-[20px] text-green-500'>
                        <Map />
                    </div>
                    <span className='mr-[10px]'>{data.city}</span>
                </div>
                <div className='flex mt-[30px] items-center'>
                    <div className='w-[20px] h-[20px] text-green-500'>
                        <Email />
                    </div>
                    <span className='mr-[10px]'>{data.email}</span>
                </div>
                <div className='flex mt-[30px] items-center'>
                    <div className='w-[20px] h-[20px] text-green-500'>
                        <Mobile />
                    </div>
                    <span className='mr-[10px]'>{data.phone}</span>
                </div>
            </div>
            <div className='block xl:mr-[30px] mt-[30px] bg-[#0b0b13] w-fit max-xl:w-full p-10 px-[100px]'>
                <h2 className='text-[2rem]'>پیام خود را برای من ارسال کنید</h2>
                <div className='flex max-xl:block justify-between mt-[30px]'>
                    <div>
                        <Input placeholder='نام و نام خانوادگی' />
                    </div>
                    <div className='xl:mr-[50px] max-xl:mt-[30px]'>
                        <Input placeholder='ایمیل'/>
                    </div>
                </div>
                <div className='mt-[30px] w-full'>
                    <Input placeholder='عنوان' />
                </div>
                <div className='mt-[50px]' dir='rtl'>
                    <QuillNoSSRWrapper  theme="snow" modules={modules} formats={formats} />
                </div>
                <div className='mt-[30px]'>
                    <Button title='ارسال' />
                </div>
            </div>
            </div>
           
        </div>
    );
}

export default ContactMe;