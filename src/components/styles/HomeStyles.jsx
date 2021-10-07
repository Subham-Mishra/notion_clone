import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const FlexDiv = styled.div`
    width: 22rem;
    height: 5rem;
`

export const Heading = styled.h1`
    font-weight:900;
`;

export const Hr = styled.div`
    height: 2px;
    background: #c8c9cc;
    width: 100%;
`;

export const GroupsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const GroupColumn = styled.div`
    margin: 2rem;
`

export const AddButton = styled.button`
    padding: .2rem 2rem ;
    margin: .2rem 0;
    height: 2.5rem;
    outline: none;
    border: none;
    background: #FFFFFF00;
    color: #000;
`;

export const Input = styled.input`
    height: 2.5rem;
`;

export const GroupHeader = styled.div`
    display: flex;
    gap: 5rem;
`

export const RowDiv = styled.div`
    display: inline-block;
`

export const Select = styled.select`
    width: 50%;
    padding:.2rem;
    margin: 2rem 0;
    margin-left: 50%;
`
