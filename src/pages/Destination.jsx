import { useState } from 'react';
import { DESTINATION_TABS } from '../constants/destinationTabs';
import { StyledDestinationMain } from './styles';

const Destination = () => {
	const [info, setInfo] = useState(0);

	return (
		<StyledDestinationMain>
			<div>
				<h2>01 PICK YOUR DESTINATION</h2>
				<div>
					<div>
						<img src='' alt='' />
					</div>
					<div>
						<div>
							{DESTINATION_TABS.map((tab, index) => (
								<button key={tab.id}>{tab.name}</button>
							))}
						</div>
						<h1>PLANETA</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
							unde aut doloremque eligendi recusandae itaque dolorum illo,
							molestias soluta provident ullam suscipit at libero vel, nam
							corporis asperiores. Hic, eaque.
						</p>
						<div>
							<div>
								<h4>Distance</h4>
								<h3>XXX KM</h3>
							</div>
							<div>
								<h4>TIME</h4>
								<h3>XXX YEARS</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledDestinationMain>
	);
};

const getIndexInfo = () => {};

export default Destination;
