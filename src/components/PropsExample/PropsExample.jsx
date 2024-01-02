import React from 'react'
import { useState } from 'react';
// les props sont des objet dont l'utilisation est similaire a celles des attribut html
export default function PropsExample({name, childClickHandler}) {

    const [visible,setVisible] = useState(true);
    const localName = name;

    return (
    <>
        <div className='card'> {name} </div>;
        <button 
            onClick={() => { 
                setVisible=(!visible);
                childClickHandler("test");
            }}
            > 
            click me !
        </button>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {visible && <> test</>}

    </>
    );
}
