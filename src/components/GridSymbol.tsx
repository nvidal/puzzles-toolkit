import React, { useState } from 'react';
import styled from 'styled-components';

declare interface GridSymbolProps { 
    id: string,
    onActivateChange: (id: string, value: boolean) => void,
};
const GridSymbol = ({id, onActivateChange}: GridSymbolProps) => {

    const BrailleControl = styled.div `
        border-radius: 50px;
        width: 40px;
        height: 40px;
        background: ${props => selected ? "linear-gradient(0deg, #1C82FF, #1C82FF)" : "radial-gradient(43.21% 42.05% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, #D4D5DF 100%)"};
        box-shadow: ${props => selected ? "2px 2px 4px #C0C2CE, -2px -2px 8px #FFFFFF, inset 5px 5px 10px rgba(255, 255, 255, 0.4)" : "inset -5px -5px 16px #FFFFFF"};
        transition: all ease-in 500ms;
    `;

    const [selected, setSelect] = useState(false);

    return (
        <div>
            <BrailleControl onClick={() => {setSelect(!selected); onActivateChange(id, !selected)}} id={id} />
        </div>

    )
}

export default GridSymbol;