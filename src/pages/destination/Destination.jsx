import { DESTINATION_TABS } from '../../constants/destinationTabs';
import { DESTINATION_INFO } from '../../constants/destinationInfo';
import {
	StyledBar,
	StyledButtonTab,
	StyledDestinationMain,
	StyledStatsContainer,
	StyledStatsInfo,
	StyledStatsTitle,
	StyledSubtitle,
	StyledTabsContainer,
	StyledText,
	StyledTexts,
	StyledTitle,
	SytledContainer
} from './styles';
import { StyledImage } from '../../components/menu/styles';
import { useTabs } from '../../hooks/useTabs';

const Destination = () => {
	const { info, setInfo, getDestinationInfo } = useTabs('MOON');
	return (
		<StyledDestinationMain>
			<div>
				<StyledSubtitle>{DESTINATION_INFO[info].title}</StyledSubtitle>
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

export default Destination;
