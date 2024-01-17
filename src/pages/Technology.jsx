import { useState } from 'react';
import { TECHNOLOGY_TABS } from '../constants/technologyTabs';
import { StyledTechnologyMain } from './styles';
import { TECHNOLOGY_INFO } from '../constants/technologyInfo';

const Technology = () => {
	const [info, setInfo] = useState('LAUNCH_VEHICLE');
	return (
		<StyledTechnologyMain>
			<div>
				<h2>{TECHNOLOGY_INFO[info].title}</h2>
				<div>
					<div>
						{TECHNOLOGY_TABS.map((tab, index) => (
							<button
								key={tab.id}
								onClick={() => getTechnologyInfo(setInfo, tab.name)}
							>
								{tab.name}
							</button>
						))}
					</div>
					<div>
						<h3>{TECHNOLOGY_INFO[info].subtitle}</h3>
						<h1>{TECHNOLOGY_INFO[info].method}</h1>
						<p>{TECHNOLOGY_INFO[info].text}</p>
					</div>
					<div>
						<img src={TECHNOLOGY_INFO[info].image} alt='' />
					</div>
				</div>
			</div>
		</StyledTechnologyMain>
	);
};

const getTechnologyInfo = (setInfo, value) => {
	setInfo(value);
};

export default Technology;
