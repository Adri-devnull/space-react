import styled from 'styled-components';

const StyledTechnologyMain = styled.main`
	background-image: url('/assets/images/technology/background-technology-desktop.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Barlow Condensed', sans-serif;
	color: #fff;
`;

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	width: 1920px;
	justify-content: space-evenly;
`;

const StyledTabs = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 350px;
	width: 300px;
	justify-content: space-around;
`;

const StyledButton = styled.button`
	width: 80px;
	height: 80px;
	cursor: pointer;
	background-color: #fff;
	border-radius: 50%;
	border: none;
	color: #0b0d17;
	text-align: center;
	font-family: Bellefair;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const StyledTextContainer = styled.div`
	width: 480px;
`;

const SytledSubtitle = styled.h3`
	color: #d0d6f9;
	font-family: 'Barlow Condensed';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 2.7px;
`;

const StyledTitle = styled.h1`
	color: #fff;
	font-family: Bellefair;
	font-size: 56px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const StyledText = styled.p`
	color: #d0d6f9;
	font-family: Barlow;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

const SytledSpaceLaunch = styled.h2`
	margin-left: 260px;
	color: #fff;
	font-family: 'Barlow Condensed';
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 4.725px;
`;
export {
	StyledContainer,
	StyledTechnologyMain,
	StyledTabs,
	StyledButton,
	SytledSubtitle,
	StyledTitle,
	StyledText,
	StyledTextContainer,
	SytledSpaceLaunch
};
