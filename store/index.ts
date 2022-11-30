import { makeAutoObservable } from "mobx"
import React from "react"
import { ApplicationManager } from "./application"
import { JobManager } from "./job"
import { MessageManager } from "./message"
import { SettingManager } from "./setting"


class Store{
    jobManager: JobManager = new JobManager()
    applicationManager: ApplicationManager = new ApplicationManager()
    messageManager: MessageManager = new MessageManager()
    settingManager: SettingManager = new SettingManager()
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