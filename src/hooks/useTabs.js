import { useState } from 'react';

export const useTabs = () => {
	const [info, setInfo] = useState('MOON');

	const getDestinationInfo = (setInfo, tabName) => {
		setInfo(tabName);
	};

	return { info, setInfo, getDestinationInfo };
};
