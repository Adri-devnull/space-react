import styled from 'styled-components';

const StyledDestinationMain = styled.main`
	background-image: url('/assets/images/destination/background-destination-desktop.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Barlow Condensed', sans-serif;
	color: #fff;
`;

const SytledContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 80px;
	padding-top: 80px;
`;

const StyledImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledTexts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 450px;
	height: 500px;
`;

const StyledTitle = styled.h1`
	font-size: 7.5em;
	font-weight: 100;
	font-family: 'Bellefair', serif;
`;

const StyledText = styled.p`
	line-height: 2em;
`;

const StyledStatsContainer = styled.div`
	display: flex;
	width: 400px;
	justify-content: space-around;
`;

const StyledBar = styled.div`
	border: 1px solid grey;
	width: 400px;
`;

const StyledStatsTitle = styled.h4`
	color: #d0d6f9;
	font-family: Barlow Condensed;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 2.362px;
`;

const StyledStatsInfo = styled.h3`
	color: #fff;
	font-family: Bellefair;
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
`;

const StyledButtonTab = styled.button`
	color: #fff;
	font-weight: 400;
	background-color: transparent;
	border: none;
	cursor: pointer;
	border-bottom: 3px solid transparent;

	&:hover {
		border-bottom: 3px solid #fff;
	}
`;

const StyledTabsContainer = styled.div`
	display: flex;
	gap: 30px;
`;

export {
	StyledDestinationMain,
	SytledContainer,
	StyledImage,
	StyledTexts,
	StyledTitle,
	StyledText,
	StyledStatsContainer,
	StyledBar,
	StyledStatsTitle,
	StyledStatsInfo,
	StyledButtonTab,
	StyledTabsContainer
};
