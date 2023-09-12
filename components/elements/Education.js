

function Education({title , university , year}) {
    return (
        <div className="relative my-5">
            <div className="relative w-full rounded h-[100px] bg-[#0b0b13]">
                <div className="absolute top-[30px]">
                    <h3 className="">{title}</h3>
                    <span className="text-[#9c9c9f] text-sm">تحصیل در رشته {title} در {university}</span>
                </div>
            </div>
            <span className="absolute bg-green-500 text-white top-[5px] -right-[5px] px-[5px]">سال {year}</span>

        </div>
    );
}

export default Education;