

function Title({title}) {
    return (
        <div>
            <h2 className="text-[2rem]">{title}</h2>
            <div className="flex items-center">
                <div className="w-[70px] h-0.5 bg-green-500"></div>
                <div className="w-2 h-2 rounded bg-green-500"></div>
            </div>
        </div>
    );
}

export default Title;