function Progress({ title, width }) {
  console.log(width);
  return (
    <div className="mt-[20px]">
      <span>{title}</span>
      <div className="flex items-center h-2 w-[100%] rounded bg-[#404048]">
        <div
          className={`h-2 -ml-3 rounded-full bg-green-500`}
          style={{ width: `${width}%` }}
        ></div>
        <div className="relative  w-4 h-4 rounded bg-green-500">
          <div className="absolute text-center justify-center bottom-5 -left-[15px] w-[50px] h-[30px] bg-black rounded text-white">
            {width}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
