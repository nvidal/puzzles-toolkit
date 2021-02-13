import React, { useState } from "react";
import Grid from "./Grid";
import Result from "./Result";

const calculateResult = () => "A";

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
            <Grid gridState={braileSymbol} onActivateChange={onActivateChange}/>
            <Result value={result}/>
        </div>

    )
}

export default Translator;