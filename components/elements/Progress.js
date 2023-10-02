import { Fade, Slide } from "react-awesome-reveal";

function Progress({ title, width }) {
  console.log(width);
  return (
    <Slide>
      <div className="mt-[20px]">
      <span>{title}</span>
      <div className="flex items-center h-2 w-[100%] rounded bg-[#404048]">
        
        <div
          className={`h-2 -ml-3 rounded-full animate-pulse bg-green-500 transition ease-in-out duration-3000`}
          style={{ width: `${width}%` }}
        ></div>
        
        <div className="relative  w-4 h-4 rounded bg-green-500">
          <div className="absolute animate-bounce text-center justify-center bottom-5 -left-[15px] w-[50px] h-[30px] bg-black rounded text-white">
            {width}
          </div>
        </div>
      </div>
    </div>
    </Slide>
  );
}

export default Progress;
