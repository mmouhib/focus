import * as React from 'react';
import Clickable from '../components/Clickable';
import { useState } from 'react';
import Position from '../Position';
import ThemesToggler from '../components/ThemesToggler';

export default function () {
	const [positions, setPositions] = useState<Position[]>([]);
	const [dots, setDots] = useState<number>(0);

	const PositionsPicker = (): Position => {
		let top: number = Math.floor(Math.random() * 900) + 10;
		let left: number = Math.floor(Math.random() * 1840) + 15;
		return new Position(top, left);
	};

	return (
		<>
			<ThemesToggler />
			{[...Array(15)].map((element, index) => {
				setTimeout(() => {}, 5000);
				return (
					<Clickable
						index={index}
						top={PositionsPicker().getTop()}
						left={PositionsPicker().getLeft()}
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
