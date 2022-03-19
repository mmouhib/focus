import React, { useEffect, useState } from 'react';
import Position from '../Position';
import '../styles/Clickable.css';
import styled from 'styled-components';

interface ClickableProps {
	key: number;
	index: number;
	positions: Position[];
	setPositions: (value: Position[]) => void;
	dots: number;
	setDots: (value: number) => void;
	top: number;
	left: number;
}

export default function (props: ClickableProps): JSX.Element {
	const colors: string[] = ['#da2d2d', '#87fc77', '#de2ec1', '#229fe3', '#bb32b3'];
	const [display, setDisplay] = useState<'inline' | 'none'>('inline');

	const StyledDot = styled.div`
		height: 70px;
		width: 70px;
		border-radius: 50%;
		position: absolute;
		animation-name: resize;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		top: ${props.top.toString() + 'px'};
		left: ${props.left.toString() + 'px'};
		display: ${display};
		background: ${colors[Math.floor(Math.random() * colors.length)]};

		@keyframes resize {
			0% {
				//top: ${props.top.toString() + 'px'};
				//left: ${props.left.toString() + 'px'};
				height: 70px;
				width: 70px;
			}
			25% {
				// top: ${(props.top + props.top * 0.1).toString() + 'px'};
				// left: ${(props.left + props.left * 0.1).toString() + 'px'};

				height: 80px;
				width: 80px;
			}
			50% {
				// top: ${(props.top + props.top * 0.2).toString() + 'px'};
				// left: ${(props.left + props.left * 0.2).toString() + 'px'};
				height: 90px;
				width: 90px;
				border: 4px dashed ${colors[Math.floor(Math.random() * colors.length)]}; // random color from colors array
				border-radius: 45%;
			}
			75% {
				// top: ${(props.top + props.top * 0.1).toString() + 'px'};
				// left: ${(props.left + props.left * 0.1).toString() + 'px'};
				height: 80px;
				width: 80px;
			}
			100% {
				// top: ${props.top.toString() + 'px'};
				// left: ${props.left.toString() + 'px'};
				height: 70px;
				width: 70px;
			}
		}
	`;

	useEffect(() => {
		console.log(props.top, props.left);
		console.log(props.index);
		setTimeout(() => {
			setDisplay('none');
		}, Math.floor(Math.random() * 50000));
	}, []);

	return (
		<StyledDot
			onClick={() => {
				setDisplay('none');
			}}
		/>
	);
}
