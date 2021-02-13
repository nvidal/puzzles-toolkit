import GridSymbol from "./GridSymbol";

declare interface GridProps { 
    gridState : boolean[], 
    onActivateChange: (id: number) => void
};
const Grid = ({ gridState, onActivateChange }: GridProps) => {

    

    return (
        <div>
                {gridState.map( (el, idx) => <GridSymbol id={idx} value={el} onActivateChange={onActivateChange}/> )}
        </div>

    )
}

export default Grid;