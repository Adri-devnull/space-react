import { useState } from 'react';
import { DESTINATION_TABS } from '../../constants/destinationTabs';
import { DESTINATION_INFO } from '../../constants/destinationInfo';
import {
	StyledBar,
	StyledButtonTab,
	StyledDestinationMain,
	StyledStatsContainer,
	StyledStatsInfo,
	StyledStatsTitle,
	StyledTabsContainer,
	StyledText,
	StyledTexts,
	StyledTitle,
	SytledContainer
} from './styles';
import { StyledImage } from '../../components/menu/styles';

const Destination = () => {
	const [info, setInfo] = useState('MOON');

	return (
		<StyledDestinationMain>
			<div>
				<h2>{DESTINATION_INFO[info].title}</h2>
				<SytledContainer>
					<StyledImage>
						<img src={DESTINATION_INFO[info].image} alt='' />
					</StyledImage>
					<StyledTexts>
						<StyledTabsContainer>
							{DESTINATION_TABS.map((tab, index) => (
								<StyledButtonTab
									key={tab.id}
									onClick={() => getDestinationInfo(setInfo, tab.name)}
								>
									{tab.name}
								</StyledButtonTab>
							))}
						</StyledTabsContainer>
						<StyledTitle>{DESTINATION_INFO[info].planet}</StyledTitle>
						<StyledText>{DESTINATION_INFO[info].text}</StyledText>
						<StyledBar></StyledBar>
						<StyledStatsContainer>
							<div>
								<StyledStatsTitle>
									{DESTINATION_INFO[info].stats[0].title}
								</StyledStatsTitle>
								<StyledStatsInfo>
									{DESTINATION_INFO[info].stats[0].value}
								</StyledStatsInfo>
							</div>
							<div>
								<StyledStatsTitle>
									{DESTINATION_INFO[info].stats[1].title}
								</StyledStatsTitle>
								<StyledStatsInfo>
									{DESTINATION_INFO[info].stats[1].value}
								</StyledStatsInfo>
							</div>
						</StyledStatsContainer>
					</StyledTexts>
				</SytledContainer>
			</div>
		</StyledDestinationMain>
	);
};

const getDestinationInfo = (setInfo, tabName) => {
	setInfo(tabName);
};

export default Destination;
