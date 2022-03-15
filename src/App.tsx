import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Clickable from './components/Clickable';
import { useState } from 'react';
import Position from './Position';

//todo generate circle color randomly
export default function () {
	const colors: string[] = ['#b22828', '#42853a', '#bbb', '#378e91', '#bb32b3'];
	const [positions, setPositions] = useState<Position[]>([]);

	return (
		<ChakraProvider>
			{[...Array(10)].map((element, index) => {
				let top: number = Math.floor(Math.random() * 800) + 10;
				let left: number = Math.floor(Math.random() * 1500) + 15;
				// setPositions([new Position(top, left), ...positions]);

				let color: string = colors[Math.floor(Math.random() * colors.length)].toString();
				return (
					<Clickable
						key={index}
						top={top.toString() + 'px'}
						left={left.toString() + 'px'}
						color={color}
					/>
				);
			})}
		</ChakraProvider>
	);
}
