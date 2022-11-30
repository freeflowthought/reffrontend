import { makeAutoObservable } from "mobx";
import { ApplicationService, Application } from "store/service/application";

export class ApplicationsController {
    applications: Application[] = []
    constructor () {
        makeAutoObservable(this)
    }
    
    async getApplications () {
        const applications = await ApplicationService.getApplications()
        this.applications = applications
    }
}