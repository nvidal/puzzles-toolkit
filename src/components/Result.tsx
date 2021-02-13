
declare interface Props { 
    value : string
};
const Result = ({value}: Props) => {

    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}

export default Result;