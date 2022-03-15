export default class Position {
	private top: number;
	private left: number;

	constructor(top: number, left: number) {
		this.top = top;
		this.left = left;
	}

	getTop(): number {
		return this.top;
	}

	getLeft(): number {
		return this.left;
	}
}
