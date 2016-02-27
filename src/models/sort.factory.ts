export class SortFactory {

    public index: number = 0;
    public options: Array<number> =  [-1, 1, 0];
    public current: number = this.options[this.index];
    get next () {

        this.index++;
        if (this.index > this.options.length - 1) {
            this.index = 0;
        }
        this.current = this.options[this.index];
        return this.current;
    }

    constructor () {
    }
}
