import { MENU_INFO } from '../../constants/menu';
import {
	StyledBar,
	StyledImage,
	StyledLink,
	StyledList,
	StyledNav
} from './styles';

const Menu = () => {
	return (
		<StyledNav>
			<StyledImage>
				<img src='/assets/images/logo/logo.svg' alt='' />
			</StyledImage>
			<StyledBar></StyledBar>
			<StyledList>
				{MENU_INFO.map(menuItem => (
					<li key={menuItem.id}>
						<StyledLink to={menuItem.path}>{menuItem.name}</StyledLink>
					</li>
				))}
			</StyledList>
		</StyledNav>
	);
};

export default Menu;
