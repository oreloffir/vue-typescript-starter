const nameMaxLength = 10;

class Customer {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName && newName.length > nameMaxLength) {
            throw new Error('Name has a max length of ' + nameMaxLength);
        }

        this._name = newName;
    }
}
