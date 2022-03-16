import { IconButton } from '@chakra-ui/react';
//@ts-ignore
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const style: React.CSSProperties = {
	position: 'absolute',
	left: '97.5%',
	top: '1vh',
};

export default function ThemesToggler(): JSX.Element {
	const [theme, setTheme] = useState<boolean>(true);

	return (
		<IconButton
			style={style}
			aria-label="themeSwitcher"
			icon={
				theme ? (
					<SunIcon w={5} h={5} color="white.500" />
				) : (
					<MoonIcon w={5} h={5} color="white.500" />
				)
			}
			onClick={() => {
				setTheme(!theme);
			}}
		/>
	);
}
