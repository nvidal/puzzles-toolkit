import GridSymbol from "./GridSymbol";

declare interface GridProps { 
    gridState :{ id: string,  active:boolean}[], 
    onActivateChange: (id: string, value: boolean) => void
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
        <div style={braileStyles}>
                {gridState.map( el => <GridSymbol id={el.id} onActivateChange={onActivateChange}/> )}
        </div>

    )
}

export default Grid;