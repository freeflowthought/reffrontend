import { makeAutoObservable } from "mobx"
import React from "react"
import { IndexController } from "./controller"
import { ApplicationController } from "./controller/application"
import { ApplicationsController } from "./controller/applications"
import { ProfileController } from "./controller/profile"


class Store{
    indexController: IndexController = new IndexController()
    profileController: ProfileController = new ProfileController()
    applicationController: ApplicationController = new ApplicationController()
    applicationsController: ApplicationsController = new ApplicationsController()
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