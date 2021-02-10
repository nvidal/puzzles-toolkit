import React, { useState } from 'react';

declare interface GridSymbolProps { 
    id: string,
    onActivateChange: (id: string, value: boolean) => void
};
const GridSymbol = ({id, onActivateChange}: GridSymbolProps) => {

    const [selected, setSelect] = useState(false);
    let styles= {
        backgroundColor: (selected ? "blue" : "pink"),
        borderRadius: "50px",
        width: "40px",
        height: "40px"
    }
    return (
        <div>
            <div onClick={() => {setSelect(!selected); onActivateChange(id, !selected)}} style={styles} id={id} />
        </div>

    )
}

export default GridSymbol;