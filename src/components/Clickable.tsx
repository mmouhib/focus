import React, { useEffect, useState } from 'react';
import Position from '../Position';
import '../styles/Clickable.css';
import styled from 'styled-components';

interface ClickableProps {
	key: number;
	positions: Position[];
	setPositions: (value: Position[]) => void;
	dots: number;
	setDots: (value: number) => void;
}

export default function (props: ClickableProps): JSX.Element {
	const colors: string[] = ['#da2d2d', '#87fc77', '#de2ec1', '#229fe3', '#bb32b3'];

	const [display, setDisplay] = useState<'inline' | 'none'>('inline');
	const [top, setTop] = useState<number>(0);
	const [left, setLeft] = useState<number>(0);

	const PositionsPicker = (): Position => {
		let top: number = Math.floor(Math.random() * 900) + 10;
		let left: number = Math.floor(Math.random() * 1840) + 15;
		return new Position(top, left);
	};

	useEffect(() => {
		let positionsObject = PositionsPicker();
		setTop(positionsObject.getTop());
		setLeft(positionsObject.getLeft());

		props.setPositions([...props.positions, positionsObject]);
		props.setDots(props.dots + 1);

		setTimeout(() => {
			setDisplay('none');
			props.setDots(props.dots - 1);
		}, Math.floor(Math.random() * 50000));
	}, []);

	const StyledDot = styled.div`
		height: 70px;
		width: 70px;
		border-radius: 50%;
		position: absolute;
		animation-name: resize;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		top: ${top.toString() + 'px'};
		left: ${left.toString() + 'px'};

		@keyframes resize {
			0% {
				top: ${(top + top * 0.2).toString() + 'px'};
				left: ${(left + left * 0.1).toString() + 'px'};
				height: 70px;
				width: 70px;
			}
			25% {
				top: ${(top + top * 0.3).toString() + 'px'};
				left: ${(left + left * 0.2).toString() + 'px'};
				height: 80px;
				width: 80px;
			}
			50% {
				height: 90px;
				width: 90px;
				border: 3px dashed #00d0ff;
				border-radius: 45%;
			}
			75% {
				height: 80px;
				width: 80px;
			}
			100% {
				height: 70px;
				width: 70px;
			}
		}
	`;

	const Styles: React.CSSProperties = {
		backgroundColor: colors[Math.floor(Math.random() * colors.length)].toString(),
		display: display,
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
