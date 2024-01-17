import { useState } from 'react';
import { CREW_INFO } from '../../constants/crewInfo';
import { CREW_TABS } from '../../constants/crewTabs';
import { StyledCrewContainer, StyledCrewMain } from './styles';

const Crew = () => {
	const [info, setInfo] = useState('COMMANDER');
	return (
		<StyledCrewMain>
			<div>
				<h2>{CREW_INFO[info].title}</h2>
				<StyledCrewContainer>
					<div>
						<h2>{CREW_INFO[info].occupation}</h2>
						<h1>{CREW_INFO[info].name}</h1>
						<p>{CREW_INFO[info].text}</p>
						<div>
							{CREW_TABS.map((tab, index) => (
								<button
									key={tab.id}
									onClick={() => getCrewInfo(setInfo, tab.name)}
								>
									{tab.name}
								</button>
							))}
						</div>
					</div>
					<div>
						<img src={CREW_INFO[info].image} alt='' />
					</div>
				</StyledCrewContainer>
			</div>
		</StyledCrewMain>
	);
};

const getCrewInfo = (setInfo, value) => {
	setInfo(value);
};

export default Crew;
