import React from 'react';

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <button 
            className={`outline-none border-none ${bg} ${bPad} ${color} ${bRad} font-inherit text-inherit flex items-center gap-2 cursor-pointer transition-all duration-400 ease-in-out`}
            onClick={onClick}
        >
            {icon}
            {name}
        </button>
    )
}

export default Button;
