import { makeAutoObservable } from "mobx"

export class Application {
    id:  number | undefined
    constructor (arg?: Partial<Application>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}


export class ApplicationManager {
    applications: Application[] = []
    constructor (arg?: Partial<ApplicationManager>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}
