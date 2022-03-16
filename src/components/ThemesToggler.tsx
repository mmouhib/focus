import { IconButton } from '@chakra-ui/react';
//@ts-ignore
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function ThemesToggler(): JSX.Element {
	const [theme, setTheme] = useState<boolean>(true);

	return (
		<IconButton
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
