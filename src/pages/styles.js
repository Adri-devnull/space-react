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

const StyledHomeTitle = styled.h2`
	margin: 0;
`;

export { StyledHomeMain, StyledHomeTitle };
