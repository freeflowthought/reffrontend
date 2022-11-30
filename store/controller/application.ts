import { makeAutoObservable } from "mobx";
import { ApplicationService, Application } from "store/service/application";

export class ApplicationController {
    application: Application = new Application()
    constructor () {
        makeAutoObservable(this)
    }
    async getApplicationById (id: number) {
       const application = await ApplicationService.getApplicationById(id)
       this.application = application
    }
    
}