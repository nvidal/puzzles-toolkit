import styled from 'styled-components';

declare interface Props { 
    value : string
};

const Container = styled.div `
    background: #F7F7F8;
    border: 3px solid #C0C0C5;
    box-sizing: border-box;
    box-shadow: 8px 8px 32px rgba(188, 189, 199, 0.4);
    border-radius: 20px;
    margin-top: 2em;
    min-width: 8em;
    height: 4em;
`;

const Result = ({value}: Props) => {

    return (
        <Container>
            <h1>{value}</h1>
        </Container>
    )
}

export default Result;