
const Alphablet = [
    {character: 'A', code: 1},
    {character: 'B', code: 13},
    {character: 'C', code: 12},
    {character: 'D', code: 124},
    {character: 'E', code: 14},
    {character: 'F', code: 123},
    {character: 'G', code: 1234},
    {character: 'H', code: 134},
    {character: 'I', code: 23},
    {character: 'J', code: 234},
    {character: 'K', code: 15},
    {character: 'L', code: 135},
    {character: 'M', code: 125},
    {character: 'N', code: 1245},
    {character: 'O', code: 145},
    {character: 'P', code: 1235},
    {character: 'Q', code: 12345},
    {character: 'R', code: 1345},
    {character: 'S', code: 235},
    {character: 'T', code: 2345},
    {character: 'U', code: 156},
    {character: 'V', code: 1356},
    {character: 'W', code: 2346},
    {character: 'X', code: 1256},
    {character: 'Y', code: 12456},
    {character: 'Z', code: 1456}
]

export default class Calculator {

    static calculateResult(symbol: boolean[]): string {
        
        let code = symbol.map((sym, index) => sym ? index + 1 : null).filter(value => value).join('');

        let result = Alphablet.find(value => value.code.toString() === code);

        return result ? result.character : "";
    }
}