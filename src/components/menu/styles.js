import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
	position: absolute;
	background-color: transparent;
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
	background: linear-gradient(to right, #0d1b2a, rgba(83, 92, 104, 0.7));
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
