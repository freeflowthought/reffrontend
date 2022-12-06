import { makeAutoObservable } from "mobx";
import { ApplicationService, Application } from "store/service/application";

export class ApplicationController {
    applicationService = ApplicationService.getInstance()
    application: Application = new Application()
    constructor () {
        makeAutoObservable(this)
    }
    async getApplicationById (id: number) {
       const application = await this.applicationService.getApplicationById(id)
       this.application = application
    }
    
}