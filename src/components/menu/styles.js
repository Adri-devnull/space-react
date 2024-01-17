import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
	position: absolute;
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 40px;
`;
const StyledImage = styled.div`
	padding-left: 80px;
`;
const StyledBar = styled.div`
	border-bottom: 1px solid #fff;
	width: 1100px;
	margin-left: 50px;
`;

const StyledList = styled.ul`
	font-family: 'Barlow Condensed', sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 80px;
	list-style: none;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(40.774227142333984px);
	height: 96px;
	width: 100%;
`;

const StyledLink = styled(Link)`
	font-size: 1.1em;
	text-decoration: none;
	color: #fff;
	letter-spacing: 0.3em;
`;

export { StyledNav, StyledBar, StyledList, StyledLink, StyledImage };
