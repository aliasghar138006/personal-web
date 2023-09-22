import Search from "public/icons/Search";
import Link from "next/link";

function SearchBtn({url}) {
    console.log(url);
    return (
       <Link href={url}>
         <div className='absolute cursor-pointer bottom-2 left-3 bg-green-600 text-white w-[50px] h-[50px] p-3' >
            <Search />
        </div> 
       </Link>
    );
}

export default SearchBtn;