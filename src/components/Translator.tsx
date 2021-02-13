import React, { useState } from "react";
import Grid from "./Grid";
import Result from "./Result";
import styled from 'styled-components';


const calculateResult = () => "A";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Translator = () => {

    const [braileSymbol, setBraileSymbol] = useState([ false, false, false, false, false, false ]);
    const [result, setResult] = useState("--");

    const onActivateChange = (id: number) => { 
        let copy = braileSymbol;
        copy[id] = !copy[id];
        setBraileSymbol(copy);
        console.log(braileSymbol);

        setResult(calculateResult());
    };
    

    return (
        <div>
        <Container>
            <Grid gridState={braileSymbol} onActivateChange={onActivateChange}/>
            <Result value={result}/>
        </Container>
        </div>

    )
}

export default Translator;