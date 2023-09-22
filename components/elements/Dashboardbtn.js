
function Dashboardbtn({title , onClick}) {
  return (
    <div className="text-center my-[20px]">
      <button
        className="inline mx-auto text-center w-[60%] mt-[50px] bg-green-400 py-3 rounded-full"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

export default Dashboardbtn;
