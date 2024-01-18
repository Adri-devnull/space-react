import { useState } from 'react';
import { CREW_INFO } from '../../constants/crewInfo';
import { CREW_TABS } from '../../constants/crewTabs';
import {
	StyledCrewButton,
	StyledCrewContainer,
	StyledCrewContainerImg,
	StyledCrewContainerTexts,
	StyledCrewMain,
	StyledCrewName,
	StyledCrewOcupation,
	StyledCrewSubtitle,
	StyledCrewText,
	StyledTabsContainer
} from './styles';

const Crew = () => {
	const [info, setInfo] = useState('COMMANDER');
	return (
		<StyledCrewMain>
			<div>
				<StyledCrewContainer>
					<StyledCrewContainerTexts>
						<StyledCrewSubtitle>{CREW_INFO[info].title}</StyledCrewSubtitle>
						<StyledCrewOcupation>
							{CREW_INFO[info].occupation}
						</StyledCrewOcupation>
						<StyledCrewName>{CREW_INFO[info].name}</StyledCrewName>
						<StyledCrewText>{CREW_INFO[info].text}</StyledCrewText>
						<StyledTabsContainer>
							{CREW_TABS.map((tab, index) => (
								<StyledCrewButton
									key={tab.id}
									onClick={() => getCrewInfo(setInfo, tab.name)}
								></StyledCrewButton>
							))}
						</StyledTabsContainer>
					</StyledCrewContainerTexts>
					<StyledCrewContainerImg>
						<img src={CREW_INFO[info].image} alt='' />
					</StyledCrewContainerImg>
				</StyledCrewContainer>
			</div>
		</StyledCrewMain>
	);
};

const getCrewInfo = (setInfo, value) => {
	setInfo(value);
};

export default Crew;
