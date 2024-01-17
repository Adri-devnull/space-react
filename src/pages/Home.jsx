import {
	StyledHomeButton,
	StyledHomeContainer,
	StyledHomeMain,
	StyledHomeParagraph,
	StyledHomeSubTitle,
	StyledHomeTexts,
	StyledHomeTitle
} from './styles';

const Home = () => {
	return (
		<StyledHomeMain>
			<StyledHomeContainer>
				<StyledHomeTexts>
					<StyledHomeSubTitle>SO, YOU WANT TO TRAVEL TO</StyledHomeSubTitle>
					<StyledHomeTitle>SPACE</StyledHomeTitle>
					<StyledHomeParagraph>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</StyledHomeParagraph>
				</StyledHomeTexts>
				<div>
					<StyledHomeButton>EXPLORE</StyledHomeButton>
				</div>
			</StyledHomeContainer>
		</StyledHomeMain>
	);
};

export default Home;
