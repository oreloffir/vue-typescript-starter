import Order from '@/assets/ts/Entities/Order';

const maxLength = 10;

class Queue {
    private _id: number;
    private array: Order[];
    protected static counter = 0;

    constructor() {
        this._id = Queue.counter++;
        this.array = new Array<Order>();
    }

    get length(): number {
        return this.array.length;
    }

    public deliver() {
        return this.array.pop();
    }

    public addOrder(order: Order) {
        return this.array.push(order);
    }
}

export default Queue;
