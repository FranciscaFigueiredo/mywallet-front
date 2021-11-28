import styled from "styled-components"

const Actions = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const New = styled.div`
	width: 43vw;
    height: 100px;

	color: #ffffff;
	font-size: 20px;
    font-weight: bold;

    font-family: 'Raleway', sans-serif;
    text-align: center;

	border-radius: 5px;
	background-color: #a328d6;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    margin: 0 auto 15px;
    padding: 5px;

    position: absolute;
    bottom: 0;
    left: ${(props) => props.type === "in" ? 0 : ""};
    right: ${(props) => props.type === "out" ? 0 : ""};

    span {
        width: 20vw;
        text-align: left;
        color: #ffffff;
        font-weight: bold;
    }
`;

export {
    New,
    Actions
}