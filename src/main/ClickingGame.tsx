import * as React from 'react';
import Clickable from '../components/Clickable';
import { useState } from 'react';
import Position from '../Position';
import ThemesToggler from '../components/ThemesToggler';

//todo generate circle color randomly
export default function () {
	const colors: string[] = ['#b22828', '#42853a', '#bbb', '#378e91', '#bb32b3'];
	const [positions, setPositions] = useState<Position[]>([]);

	return (
		<>
			<ThemesToggler />
			{[...Array(15)].map((element, index) => {
				let color: string = colors[Math.floor(Math.random() * colors.length)].toString();
				return (
					<Clickable key={index} color={color} positions={positions} setPositions={setPositions} />
				);
			})}
		</>
	);
}
