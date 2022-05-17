export class Square {
    highlight: boolean = false;
    // row
    constructor(
        public name: string,
        public piece: string,
        public x: number,
        public y: number,
        public side: string,
        public player: number) {}
}
