import { TECHNOLOGY_TABS } from '../../constants/technologyTabs';
import { TECHNOLOGY_INFO } from '../../constants/technologyInfo';
import {
	StyledButton,
	StyledContainer,
	StyledTabs,
	StyledTechnologyMain,
	StyledText,
	StyledTextContainer,
	StyledTitle,
	SytledSpaceLaunch,
	SytledSubtitle
} from './styles';
import { useTabs } from '../../hooks/useTabs';

const Technology = () => {
	const { info, setInfo, getDestinationInfo } = useTabs('LAUNCH_VEHICLE');
	return (
		<StyledTechnologyMain>
			<div>
				<SytledSpaceLaunch>{TECHNOLOGY_INFO[info].title}</SytledSpaceLaunch>
				<StyledContainer>
					<StyledTabs>
						{TECHNOLOGY_TABS.map((tab, index) => (
							<StyledButton
								key={tab.id}
								onClick={() => getDestinationInfo(setInfo, tab.name)}
							>
								{index + 1}
							</StyledButton>
						))}
					</StyledTabs>
					<StyledTextContainer>
						<SytledSubtitle>{TECHNOLOGY_INFO[info].subtitle}</SytledSubtitle>
						<StyledTitle>{TECHNOLOGY_INFO[info].method}</StyledTitle>
						<StyledText>{TECHNOLOGY_INFO[info].text}</StyledText>
					</StyledTextContainer>
					<div>
						<img src={TECHNOLOGY_INFO[info].image} alt='' />
					</div>
				</StyledContainer>
			</div>
		</StyledTechnologyMain>
	);
};

export default Technology;
