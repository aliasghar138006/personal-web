import SearchBtn from "components/elements/SearchBtn";
import Link from "next/link";
import { useState } from "react";


function MyDoc({ title, image, url = "/documents" }) {
  const [show, setShow] = useState(false);
  const hoverHandler = () => {
    setShow(true);
  };

  const leaveHandler = () => {
    setShow(false);
  };

  return (
    <div
      className="relative inline-block mt-5 ml-2 overflow-hidden"
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandler}
    >
      <img src={image} width="400px" height="200px" alt="mcab" />
      {show ? (
        <div style={{ transition: "all ease 3s" }}>
          <div className="absolute top-2 right-[10%] w-[80%] text-center  bg-[#0c0c14] p-5 opacity-90">
            {title}
          </div>
          <SearchBtn url={url} />
        </div>
      ) : null}
    </div>
  );
}

export default MyDoc;
