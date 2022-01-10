import React, { useState } from "react";
import Grid from "./Grid";
import Result from "./Result";
import styled from 'styled-components';
import Calculator from "../services/Calculator";


const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4em;
`;

const Translator = () => {

    const [braileSymbol, setBraileSymbol] = useState([ false, false, false, false, false, false ]);
    const [result, setResult] = useState("--");

    const onActivateChange = (id: number) => { 
        let copy = braileSymbol;
        copy[id] = !copy[id];
        setBraileSymbol(copy);

        setResult(Calculator.calculateResult(braileSymbol));
    };
    

    return (
        <div>
        <Container>
            <Grid gridState={braileSymbol} onActivateChange={onActivateChange}/>
            <Result value={result} hints={Calculator.calculateHints(braileSymbol)}/>
        </Container>
        </div>

    )
}

export default Translator;