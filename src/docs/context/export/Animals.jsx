//==========================================================================
import React, { Children, useContext, useState } from 'react';
import Animal from './Animal';
import { animalsContext, AnimalsProvider } from './animalsContext';

const Animals = () => {
    const { state, actions } = useContext(animalsContext)
    const { animals } = state
    const { insert, remove } = actions
    const [ value, setValue] = useState("")


    return (
        <div>
            <animalsContext.Provider>
            <p>

                <input type="text" onKeyDown={insert} value={value}/>
            </p>
            <Animal />
            </animalsContext.Provider>
        </div>  
    );
};

export default Animals;