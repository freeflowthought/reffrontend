import { makeAutoObservable } from "mobx";
import { ApplicationService, Application } from "store/service/application";

export class ApplicationsController {
    applications: Application[] = []
    applicationService = ApplicationService.getInstance()
    constructor () {
        makeAutoObservable(this)
    }
    
    async getApplications () {
        const applications = await this.applicationService.getApplications()
        this.applications = applications
    }
}