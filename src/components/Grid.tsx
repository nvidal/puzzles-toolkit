import GridSymbol from "./GridSymbol";
import styled from 'styled-components';

declare interface GridProps { 
    gridState : boolean[], 
    onActivateChange: (id: number) => void
};

const GridContainer = styled.div `
    background: #E9EAEF;
    box-shadow: 8px 8px 32px rgba(188, 189, 199, 0.4);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    box-sizing: border-box;
    padding: 24px;
    row-gap: 16px;
    column-gap: 16px;
    align-items: center;
    justify-items: center;

`;

const Grid = ({ gridState, onActivateChange }: GridProps) => {

    return (
        <GridContainer>{gridState.map( (el, idx) => <GridSymbol key={idx} id={idx} value={el} onActivateChange={onActivateChange} /> )}</GridContainer>
    )
}

export default Grid;