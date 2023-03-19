import { queryCurrentUser, signin, signup } from 'apis/user';
import { makeAutoObservable } from 'mobx';
import { AsyncState } from 'store/lib/common';
export class User {
    id: number | undefined
    name = ''
    email = ''
    constructor(arg?: Partial<User>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}


export class UserService {
    static _instance: UserService
    currentUser: User
    signin = async function (values: any) {
        const token = await signin(values)
        window.localStorage.setItem('token', token)
    }
    signup = async function (values: any) {
        const token = await signup()
        window.localStorage.setItem('token', token)
    }
    static getInstance() {
        return UserService._instance || new UserService()

    }
    async getCurrentUser() {
        const user = await queryCurrentUser()
        this.currentUser = new User(user)
        return this.currentUser
    }

}