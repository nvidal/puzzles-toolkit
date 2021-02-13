import React, { useState } from 'react';

declare interface GridSymbolProps { 
    id: number,
    value: boolean,
    onActivateChange: (id: number) => void
};
const GridSymbol = ({id, value, onActivateChange}: GridSymbolProps) => {

    const [selected, setSelected] = useState(value);
    let styles= {
        backgroundColor: (selected ? "blue" : "pink"),
        borderRadius: "50px",
        width: "40px",
        height: "40px"
    }
    return (
        <div id={id.toString()}>
            <div onClick={() => {setSelected(!selected); onActivateChange(id)}} style={styles}/>
        </div>

    )
}

export default GridSymbol;