import GridSymbol from "./GridSymbol";

const Grid = () => {

    return (
        <div>
            <table>
                <tr><td><GridSymbol id="1"/></td><td><GridSymbol id="2"/></td></tr>
                <tr><td><GridSymbol id="3"/></td><td><GridSymbol id="4"/></td></tr>
                <tr><td><GridSymbol id="5"/></td><td><GridSymbol id="6"/></td></tr>
            </table>
        </div>

    )
}

export default Grid;