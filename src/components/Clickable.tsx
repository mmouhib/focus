import React, { useState } from 'react';

interface ClickableProps {
	key: number;
	top?: string;
	bottom?: string;
	right?: string;
	left?: string;
}

export default function Clickable(props: ClickableProps): JSX.Element {
	const [display, setDisplay] = useState<'inline' | 'none'>('inline');

	let Styles: React.CSSProperties = {
		height: '60px',
		width: '60px',
		backgroundColor: '#bbb',
		borderRadius: '50%',
		position: 'absolute',
		display: display,
	};

	return (
		<div
			style={{
				top: props.top,
				left: props.left,
				right: props.right,
				bottom: props.bottom,
				...Styles,
			}}
			onClick={() => {
				setDisplay('none');
			}}
		/>
	);
}
