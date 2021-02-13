import styled from 'styled-components';

declare interface Props { 
    value : string
};
const Result = ({value}: Props) => {

    const Container = styled.div `
        width: 200px;
        background: #F7F7F8;
        border: 3px solid #C0C0C5;
        box-sizing: border-box;
        box-shadow: 8px 8px 32px rgba(188, 189, 199, 0.4);
        border-radius: 20px;
        margin-top: 10px;
    `;

    return (
        <Container>
            <h1>{value}</h1>
        </Container>
    )
}

export default Result;