import GridSymbol from "./GridSymbol";

declare interface GridProps { 
    gridState : boolean[], 
    onActivateChange: (id: number) => void
};


const Grid = ({ gridState, onActivateChange }: GridProps) => {

    const braileStyles= {
        display: "grid",
        gridTemplateColumns: "1fr 1fr", 
        gridTemplateRows: "1fr 1fr 1fr",
        width: "auto",
        alignContent: "start",
    }

    return (
        <div>
                {gridState.map( (el, idx) => <GridSymbol id={idx} value={el} onActivateChange={onActivateChange}/> )}
        </div>

    )
}

export default Grid;