import { Resizeable } from "./Resizeable";
class Circle implements Resizeable {
    private _radius: number;
    constructor(radius : number) {
        this.radius = radius;
    }
    get radius() {
        return this.radius;
    }
    set radius(radius : number) {
        this.radius = radius;
    }
    resize(percent : number) {
        this.radius *= percent;
    }

}