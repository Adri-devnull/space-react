const { v4 } = require('uuid');

export const MENU_INFO = [
	{
		id: v4(),
		name: '00 HOME',
		route: '/'
	},
	{
		id: v4(),
		name: '01 DESTINATION',
		route: '/destination'
	},
	{
		id: v4(),
		name: '02 CREW',
		route: '/crew'
	},
	{
		id: v4(),
		name: 'TECHNOLOGY',
		route: '/technology'
	}
];
