import GridSymbol from "./GridSymbol";

declare interface GridProps { 
    gridState :{ id: string,  active:boolean}[], 
    onActivateChange: (id: string, value: boolean) => void
};
const Grid = ({ gridState, onActivateChange }: GridProps) => {

    

    return (
        <div>
                {gridState.map( el => <GridSymbol id={el.id} onActivateChange={onActivateChange}/> )}
        </div>

    )
}

export default Grid;