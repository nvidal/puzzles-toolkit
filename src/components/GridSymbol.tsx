import React, { useState } from 'react';
import styled from 'styled-components';

declare interface GridSymbolProps { 
    id: number,
    value: boolean,
    onActivateChange: (id: number) => void
};
type BrailleControllerProps = {
    selection: boolean
}

const BrailleControl = styled.div<BrailleControllerProps>`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    background: ${props => props.selection ? "linear-gradient(0deg, #1C82FF, #1C82FF)" : "radial-gradient(43.21% 42.05% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, #D4D5DF 100%)"};
    box-shadow: ${props => props.selection ? "2px 2px 4px #C0C2CE, -2px -2px 8px #FFFFFF, inset 5px 5px 10px rgba(255, 255, 255, 0.4)" : "inset -5px -5px 16px #FFFFFF"};
    transition: all ease-in 500ms;
`;

const GridSymbol = ({id, value, onActivateChange}: GridSymbolProps) => {

    const [selected, setSelected] = useState(value);

    return (
        <div>
            <BrailleControl onClick={() => {setSelected(!selected); onActivateChange(id)}} selection={selected} />
        </div>

    )
}

export default GridSymbol;