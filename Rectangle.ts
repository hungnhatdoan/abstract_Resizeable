import { Resizeable } from "./Resizeable";
class Rectangle implements Resizeable {
    private _width: number;
    private _height: number;
    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(width: number) {
        this._width = width;
    }
    get height() {
        return this._height;
    }
    set height(height: number) {
        this._height = height;
    }
    resize(percent: number) {
        this._width *= percent;
        this._height *= percent;
    }
}