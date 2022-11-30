import { makeAutoObservable } from 'mobx';
export class ValueState<T>{
    value: T | null = null;
    constructor (arg?: Partial<ValueState<T>>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
    setValue(value: T | null) {
        this.value = value
    }
}