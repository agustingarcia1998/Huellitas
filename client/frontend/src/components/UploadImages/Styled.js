import styled from "styled-components";

export const Div = styled.div`

.button{
    font-size: 20px;
    border: 1px solid orange;
    border-radius: 15px;
    margin-top: 15px;
    padding: 5px;
    width: 100%;
    background-color: white;
}

.button:hover{
    background-color: #e7b261;
    color: white;
    border: 1px solid black;
    transition: background-color 1s;
    transition: color 1s;
    transition: border 1s;
}
`