import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: 60vw;
	height: 80vh;

	background-color: white;

	border-radius: 10px;

	margin-top: 30px;
	margin-bottom: 30px;

	-webkit-box-shadow: 1px 1px 2px #999;
	-moz-box-shadow: 1px 1px 2px #999;
	box-shadow: 1px 1px 2px #999;

	::-webkit-scrollbar-track {
		background-color: #f4f4f4;
	}
	::-webkit-scrollbar {
		width: 6px;
		background: #f4f4f4;
	}
	::-webkit-scrollbar-thumb {
		background: rgb(140, 140, 140, 1);
		border-radius: 10px;
	}

	overflow-y: scroll;
`
