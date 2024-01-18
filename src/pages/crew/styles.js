import styled from 'styled-components';

const StyledCrewMain = styled.main`
	background-image: url('/assets/images/crew/background-crew-desktop.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Barlow Condensed', sans-serif;
	color: #fff;
`;

const StyledCrewContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 200px;
	margin-top: 190px;
`;

const StyledCrewButton = styled.button`
	width: 15px;
	height: 15px;
	flex-shrink: 0;
	border-radius: 15px;
	cursor: pointer;
	background: #fff;
`;

const StyledCrewOcupation = styled.h2`
	color: #fff;
	font-family: Bellefair;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	opacity: 0.5042;
	margin-bottom: 30px;
`;

const StyledCrewName = styled.h1`
	color: #fff;
	font-family: Bellefair;
	font-size: 56px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const StyledCrewText = styled.p`
	color: #d0d6f9;
	font-family: Barlow;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

const StyledCrewContainerTexts = styled.div`
	width: 600px;
	height: 500px;
	margin-top: 90px;
`;

const StyledCrewContainerImg = styled.div`
	width: 550px;
`;

const StyledCrewSubtitle = styled.h2`
	margin-bottom: 90px;
	color: #fff;
	font-family: 'Barlow Condensed';
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 4.725px;
`;

const StyledTabsContainer = styled.div`
	display: flex;
	width: 170px;
	justify-content: space-evenly;
	align-items: center;
`;

export {
	StyledCrewMain,
	StyledCrewContainer,
	StyledCrewButton,
	StyledCrewOcupation,
	StyledCrewName,
	StyledCrewText,
	StyledCrewContainerTexts,
	StyledCrewContainerImg,
	StyledCrewSubtitle,
	StyledTabsContainer
};
