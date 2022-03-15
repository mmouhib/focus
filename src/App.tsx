import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Clickable from './components/Clickable';

const RandomPosition = (min: number, max: number): string => {
	return (Math.floor(Math.random() * max) + min).toString();
};

export default function () {
	return (
		<ChakraProvider>
			{[1, 2, 3, 4, 5, 4, 54, 54, 5].map((element, index) => {
				let top: string = RandomPosition(10, 500) + 'px';
				let left: string = RandomPosition(15, 700) + 'px';
				return <Clickable key={index} top={top} left={left} />;
			})}
		</ChakraProvider>
	);
}
