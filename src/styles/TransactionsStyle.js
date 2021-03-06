import styled from "styled-components"

const Records = styled.div`
	width: 90vw;
    height: 64vh;

	font-size: 20px;
    font-family: 'Raleway', sans-serif;
    text-align: center;

    background-color: #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    margin: 0 auto 15px;
    padding: 20px 10px;

    position: relative;
`;

const Info = styled.div`
	width: 100%;

    color: #333333;

	font-size: 16px;
    font-family: 'Raleway', sans-serif;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto 15px;

    span {
        height: 20px;
        overflow: hidden;
    }
`;

const Date = styled.span`
    width: 16vw;
    color: #868686;
`;

const Delete = styled.span`
    width: 12vw;
    color: #868686;

    cursor: pointer;
`;

const Description = styled.span`
    width: 52vw;
    color: #000000;

    text-align: left;
`;

const Value = styled.span`
    min-width: 16vw;
    color: ${(props) => props.value < 0 ? '#c70000' : '#03ac00'};
    text-align: right;
`;

const Title = styled.span`
    width: 20vw;

    color: #000000;
    font-weight: bold;
    padding: 0 10px;
`;

const Total = styled.div`
    width: 100%;
    height: 8vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 30px 10px 20px;

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
`;

const TransactionsContainer = styled.div`
	width: 90vw;
    height: 54vh;

	font-size: 20px;
    font-family: 'Raleway', sans-serif;
    text-align: center;

    background-color: #ffffff;
    border-radius: 5px;

    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 10px 10px 20px;

    position: relative;
`;

export {
    Records,
    Info,
    Date,
    Delete,
    Description,
    Value,
    Title,
    Total,
    TransactionsContainer,
}
