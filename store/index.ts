import { makeAutoObservable } from "mobx"
import React from "react"
import { IndexController } from "./controller"
import { ApplicationController } from "./controller/application"
import { ApplicationsController } from "./controller/applications"
import { ProfileController } from "./controller/profile"
import { JobController } from './controller/job';
import { UserService } from './service/user';


class Store{
    indexController: IndexController = new IndexController()
    profileController: ProfileController = new ProfileController()
    jobController: JobController = new JobController()
    applicationController: ApplicationController = new ApplicationController()
    applicationsController: ApplicationsController = new ApplicationsController()
    userService = UserService.getInstance()
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