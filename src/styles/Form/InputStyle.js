import styled from "styled-components";

const Input = styled.input`
    width: 90vw;
    height: 58px;

    color: ${(props) => props.compare ? "#000000" : !props.compare ? "#ff0000" : "#000000"};
    font-size: 20px;

    margin-bottom: 10px;
    padding: 0 20px;

    background-color: #ffffff;
    border-radius: 5px;

    outline: 0;
`

export default Input;