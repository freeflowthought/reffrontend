import { queryCurrentUser } from 'apis/user';
import { makeAutoObservable } from 'mobx';
export class User {
    id: number | undefined
    name = ''
    email = ''
    constructor (arg?: Partial<User>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}


export class UserService {
    static async getCurrentUser () {
        const user = await queryCurrentUser()
        return new User(user)
    }
}