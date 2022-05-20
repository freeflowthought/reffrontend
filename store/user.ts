import { makeAutoObservable } from 'mobx';
export class User {
    id: string | undefined
    constructor (arg?: Partial<User>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}