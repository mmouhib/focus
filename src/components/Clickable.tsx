import React, { useEffect, useState } from 'react';
import Position from '../Position';
import '../styles/Clickable.css';

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

	const Styles: React.CSSProperties = {
		backgroundColor: colors[Math.floor(Math.random() * colors.length)].toString(),
		display: display,
		top: top.toString() + 'px',
		left: left.toString() + 'px',
	};

	return (
		<div
			className="dot"
			style={Styles}
			onClick={() => {
				setDisplay('none');
			}}
		/>
	);
}
