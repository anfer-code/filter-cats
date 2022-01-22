import React, { useState } from 'react';

export default function ButtonFilter({titleText, buttonText, styleText, handler}) {
    const [clicked, setClicked] = useState(false)

    return (
        <div className={`Aside__container Aside__${clicked && styleText}`}>
            <h6>{titleText}</h6>
            <button
            type="button"
            onClick={() => {
                handler()
                setClicked(!clicked)
            }}
            >{buttonText}</button>
        </div>
    );
}