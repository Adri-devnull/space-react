import styled from 'styled-components';

const StyledHomeMain = styled.main`
	background-image: url('/assets/images/home/background-home-desktop.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledHomeContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-around;
	padding-top: 100px;
`;

const StyledHomeSubTitle = styled.h2`
	margin: 0;
	font-family: 'Barlow Condensed', sans-serif;
	color: #d0d6f9;
	font-size: 2.2em;
	font-weight: 100;
	word-spacing: 0.2em;
`;

const StyledHomeTitle = styled.h1`
	font-size: 10em;
	font-family: 'Bellefair', serif;
	margin: 0;
	font-weight: 100;
`;

const StyledHomeTexts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 420px;
	width: 500px;
	color: #fff;
`;

const StyledHomeParagraph = styled.p`
	font-family: 'Barlow Condensed', sans-serif;
	color: #d0d6f9;
	line-height: 2em;
	font-size: 1.3em;
`;

const StyledHomeButton = styled.button`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	color: #0b0d17;
	border: none;
	font-family: 'Bellefair', serif;
	cursor: pointer;
	font-size: 2.1em;
	transition: box-shadow 0.2s ease;

	&:hover {
		box-shadow: 0 0 0px 70px rgba(255, 255, 255, 0.2);
	}
`;

export {
	StyledHomeMain,
	StyledHomeSubTitle,
	StyledHomeContainer,
	StyledHomeTitle,
	StyledHomeTexts,
	StyledHomeButton,
	StyledHomeParagraph
};
