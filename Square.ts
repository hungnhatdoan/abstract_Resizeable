import { Resizeable } from "./Resizeable";
class Square implements Resizeable {
    private _width: number;
    constructor(width: number) {
        this.width = width;
    }
    get width() {
        return this.width;
    }
    set width(width: number) {
        this.width = width;
    }
    resize(percent: number) {
        this.width *= percent;
    }
}