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
`;

export { StyledCrewMain, StyledCrewContainer };
