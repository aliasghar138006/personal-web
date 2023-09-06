import Particle from "../components/templates/Particles"
import Home from "../public/icons/Home"
export default function HomePage() {
  return (
    <div className='h-[800px] relative overflow-hidden'>
     
        <Particle />
        <div>
          <div >

          <div className="absolute -top-[100px] -left-[100px] opacity-60 z-0 w-[500px] h-[500px] bg-[#0b0b13] rounded-full"></div>
          <div className="absolute top-[150px] md:flex w-full p-[30px] md:justify-around">

            <div className="">
              <h1 className="text-[5rem] text-white">علی اصغر شحنه</h1>
              <h3 className="text-[1.5rem] mb-5 text-white">برنامه نویس و مدرس مورد تایید مایکروسافت</h3>
              <a href="/" target="_blank" rel="noreffere" className="mt-[50px] p-3 shadow-[-4px_4px_white] bg-green-500 text-white hover:shadow-[-4px_4px_#22c55e] hover:bg-white hover:text-green-500">دریافت رزومه</a>
            </div>
            <div>
              <img src="/images/aliasghar.jpg" className="w-[400px] h-[400px] rounded-full max-md:mt-[50px]" />
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}
