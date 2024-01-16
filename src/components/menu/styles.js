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
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 40px;
	list-style: none;
	background-color: red;
	height: 96px;
	width: 100%;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #fff;
`;

export { StyledNav, StyledBar, StyledList, StyledLink, StyledImage };
