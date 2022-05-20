import { makeAutoObservable } from "mobx"
import React from "react"
import { ApplicationManager } from "./application"
import { JobManager } from "./job"


class Store{
    jobManager: JobManager = new JobManager()
    applicationManager: ApplicationManager = new ApplicationManager()
    constructor (arg?: Partial<Store>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}

export const store = new Store()

export const StoreContext = React.createContext(store)

export const useStore = () => React.useContext(StoreContext)