import React from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import Grid from "./Grid";
import Result from "./Result";

const state = [
    {id: '1', active: false}, {id: '2', active: false},
    {id: '3', active: false}, {id: '4', active: false},
    {id: '5', active: false}, {id: '6', active: false}
    ];

const onActivateChange = (id: string, value: boolean) => { 
    let a = state.find(e => e.id == id);
    if (a) {
        a.active = value;
    }
    console.log(state);
};

const Translator = () => {

    return (
        <div>
            <Grid gridState={state} onActivateChange={onActivateChange}/>
            <Result/>
        </div>

    )
}

export default Translator;