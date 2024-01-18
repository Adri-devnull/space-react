import { useState } from 'react';

export const useTabs = value => {
	const [info, setInfo] = useState(value);

	const getDestinationInfo = (setInfo, tabName) => {
		setInfo(tabName);
	};

	return { info, setInfo, getDestinationInfo };
};
