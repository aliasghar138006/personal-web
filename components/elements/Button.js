import React from 'react';

function Button({title , href}) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="mt-[50px] p-3 shadow-[-4px_4px_white] bg-green-500 text-white hover:shadow-[-4px_4px_#22c55e] hover:bg-white hover:text-green-500">{title}</a>
    );
}

export default Button;