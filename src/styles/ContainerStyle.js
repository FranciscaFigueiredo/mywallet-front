import styled from "styled-components"

const PageContainer = styled.div`
	width: 90vw;
    height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${ (props) => props.page === "center" ? "center" : "flex-start" };

	margin: 0 auto;

    position: relative;

    a {
        color: #ffffff;
        font-size: 15px;
        font-weight: bold;
    }

    form {
        margin-top: ${ (props) => props.page === "center" ? "0" : "100px" };
    }
`;

export {
    PageContainer,
}
