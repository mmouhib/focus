import React, { useEffect, useState } from 'react';
import Position from '../Position';
import styled from 'styled-components';

interface ClickableProps {
	key: number;
	color: string;
	positions: Position[];
	setPositions: (value: Position[]) => void;
}

export default function (props: ClickableProps): JSX.Element {
	const [display, setDisplay] = useState<'inline' | 'none'>('inline');
	const [top, setTop] = useState<number>(0);
	const [left, setLeft] = useState<number>(0);

	//randomly hide dot
	useEffect(() => {
		setTimeout(() => {
			setDisplay('none');
		}, Math.floor(Math.random() * 10000));
	}, []);

	useEffect(() => {
		let top: number = Math.floor(Math.random() * 900) + 10;
		let left: number = Math.floor(Math.random() * 1840) + 15;

		// setPositions([new Position(top, left), ...positions]);
		setTop(top);
		setLeft(left);
	}, []);

	const StyledDot = styled.div`
		height: 70px;
		width: 70px;
		border-radius: 50%;
		position: absolute;
		animation-name: resize;
		animation-duration: 2s;
		animation-iteration-count: infinite;

		@keyframes resize {
			0% {
				height: 70px;
				width: 70px;
			}
			25% {
				height: 80px;
				width: 80px;
			}
			50% {
				height: 90px;
				width: 90px;
				border: 5px solid #5b5b5b;
			}

			75% {
				height: 80px;
				width: 80px;
			}
			100% {
				height: 70px;
				width: 70px;
			}
		} ;
	`;

	const Styles: React.CSSProperties = {
		backgroundColor: props.color,
		display: display,
		top: top.toString() + 'px',
		left: left.toString() + 'px',
	};

	return (
		<StyledDot
			style={Styles}
			onClick={() => {
				setDisplay('none');
			}}
		/>
	);
}
