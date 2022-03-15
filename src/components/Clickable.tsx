import React, { useState } from 'react';

interface ClickableProps {
	key: number;
	top?: string;
	bottom?: string;
	right?: string;
	left: string;
	color: string;
}

export default function Clickable(props: ClickableProps): JSX.Element {
	const [display, setDisplay] = useState<'inline' | 'none'>('inline');

	const Styles: React.CSSProperties = {
		height: '60px',
		width: '60px',
		backgroundColor: props.color,
		borderRadius: '50%',
		position: 'absolute',
		display: display,
		top: props.top,
		left: props.left,
		right: props.right,
		bottom: props.bottom,
	};

	return (
		<div
			style={Styles}
			onClick={() => {
				setDisplay('none');
			}}
		/>
	);
}
