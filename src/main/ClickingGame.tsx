import * as React from 'react';
import Clickable from '../components/Clickable';
import { useState } from 'react';
import Position from '../Position';
import ThemesToggler from '../components/ThemesToggler';

//todo generate circle color randomly
export default function () {
	const [positions, setPositions] = useState<Position[]>([]);
	const [dots, setDots] = useState<number>(0);

	return (
		<>
			<ThemesToggler />
			{[...Array(15)].map((element, index) => {
				setTimeout(() => {}, 5000);
				return (
					<Clickable
						key={index}
						positions={positions}
						setPositions={setPositions}
						dots={dots}
						setDots={setDots}
					/>
				);
			})}
		</>
	);
}
